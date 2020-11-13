require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const routes = require('./routes');
// origin: ['https://fearless-owl.surge.sh/'],
const corsOptions = {
    // origin: ['http://localhost:3000'],
    origin: ['https://fearless-owl.surge.sh/'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    optionsSuccessStatus: 200 
  }
  app.options("*", cors(corsOptions))
  app.use(cors(corsOptions))
  app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if(token){
        token = token.substring(7)
    } 

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if(err || !decodedUser){
            return res.status(401).send(`ERROR: ${err}`);
        }
        req.user = decodedUser;

        next();
    })
}
// `app.all('*', function(req, res, next) {
//     var origin = req.get('origin'); 
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   });`
// app.options("*", cors(corsOptions))

app.use('/auth', routes.auth);
app.use('/auth/verify', verifyToken, routes.auth);
app.use('/profile', verifyToken, routes.profile);
app.use('/trails', verifyToken, routes.trail);


app.use('/reviews', routes.review);


app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}`)
})