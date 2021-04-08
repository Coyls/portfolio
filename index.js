const express = require('express');
const axios = require('axios');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(express.static(__dirname + '/public'));

// -- ExpressJS -- //
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/loic/index.html');
});



http.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
// -------------------------------------------------------------------------------------------------- //

const requestAPiDribbble = async (key,link) => {
    const response = await axios.get(`https://api.dribbble.com/v2/user/shots?access_token=${key}`)
    try {
        app.get(link, (req,res) => {
            res.send(response.data)
        })
    } catch (err) {
        console.log(err)
    }
        
}

requestAPiDribbble(process.env.API_KEY_LOIC,'/getProjectLoic')
requestAPiDribbble(process.env.API_KEY_CHLOE,'/getProjectChloe')
requestAPiDribbble(process.env.API_KEY_JEANNE,'/getProjectJeanne')


    







