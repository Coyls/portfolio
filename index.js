const express = require('express');
const axios = require('axios');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(express.static(__dirname + '/public'));

// -- Root -- //
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/jeanne/index.html');
});

// -- link -- //
app.get('/loic', (req, res) => {
    res.sendFile(__dirname + '/public/loic/index.html');
});

app.get('/jeanne', (req, res) => {
    res.sendFile(__dirname + '/public/jeanne/index.html');
});

app.get('/chloe', (req, res) => {
    res.sendFile(__dirname + '/public/chloe/index.html');
});

// -- animation -- //
app.get('/chloe-load', (req, res) => {
    res.sendFile(__dirname + '/public/chloe/pages/animation_load.html');
});

http.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.setheader('Content-Type' ,'application/json');
    // Pass to next layer of middleware
    next();
});
// -------------------------------------------------------------------------------------------------- //

const requestAPiDribbble = async (key,link,path) => {

    const response = await axios.get(`https://api.dribbble.com/v2/${path}${key}`)
    try {
        app.get(link, (req,res) => {
            res.send(response.data)
        })
    } catch (err) {
        console.log(err)
    }
        
}

requestAPiDribbble(`?access_token=${process.env.API_KEY_LOIC}`,'/getProjectLoic','user/shots')
requestAPiDribbble(`?access_token=${process.env.API_KEY_CHLOE}`,'/getProjectChloe','user/shots')
requestAPiDribbble(`?access_token=${process.env.API_KEY_JEANNE}`,'/getProjectJeanne','user/shots')

requestAPiDribbble(`?access_token=${process.env.API_KEY_LOIC}`,'/getUserLoic','user')
requestAPiDribbble(`?access_token=${process.env.API_KEY_JEANNE}`,'/getUserJeanne','user')
requestAPiDribbble(`?access_token=${process.env.API_KEY_CHLOE}`,'/getUserChloe','user')





    







