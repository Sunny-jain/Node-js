const express = require('express');
const http = require('http');
const hostname = 'localhost';
const port = 3005;
const morgan = require('morgan');

const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promotionRouter');
const leaderRouter = require('./routes/leaderRouter');

const app = express();
app.use(morgan('dev'));

app.use('/dishes', dishRouter);

app.use('/promotions', promotionRouter);

app.use('/leaders', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () =>{
    console.log(`Server running on http//:${hostname}:${port}/`)
})