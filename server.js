var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var app = express()

app.set('view engine', 'ejs')

app.use(express.static('views'))
app.set('views', __dirname + '/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.get('/', function(request, response){
    response.render('main.ejs')
})

app.get('/user', function(request, response){
    response.render('userPage.ejs')
})
var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log('App running on port ' + port)
})