const express = require('express');
const axios = require('axios');
const app = express();
const http = require('http').Server(app);
const cors = require('cors')
const port = process.env.PORT || 3000;

app.use(cors())

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

// -------------------------------------------------------------------------------------------------- //

const requestAPiDribbble = async (key, link, path) => {

    const response = await axios.get(`https://api.dribbble.com/v2/${path}${key}`)
    try {
        app.get(link, (req, res) => {
            res.send(response.data)
        })
    } catch (err) {
        console.log(err)
    }

}

requestAPiDribbble(`?access_token=${process.env.API_KEY_LOIC}`, '/getProjectLoic', 'user/shots')
requestAPiDribbble(`?access_token=${process.env.API_KEY_CHLOE}`, '/getProjectChloe', 'user/shots')
requestAPiDribbble(`?access_token=${process.env.API_KEY_JEANNE}`, '/getProjectJeanne', 'user/shots')

requestAPiDribbble(`?access_token=${process.env.API_KEY_LOIC}`, '/getUserLoic', 'user')
requestAPiDribbble(`?access_token=${process.env.API_KEY_JEANNE}`, '/getUserJeanne', 'user')
requestAPiDribbble(`?access_token=${process.env.API_KEY_CHLOE}`, '/getUserChloe', 'user')