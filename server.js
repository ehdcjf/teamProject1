const express = require('express');
const app = express();
const indexRouter = require('./routers')
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');


sequelize.sync({ force: false })
    .then(() => {
        console.log('접속 완료')
    })
    .catch(() => {
        console.log('접속 실패 ')
    });

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('server start port : 3000');
});