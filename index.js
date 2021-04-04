const express = require('express');
const axios = require('axios');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// -- ExpressJS -- //
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'))

http.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
// -------------- //
axios.get(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.API_KEY_LOIC}`)
    .then(response => {
        // console.log(response);
        app.get('/getProject', (req,res) => {
            res.send(response.data)
        })

    })
    .catch(error => {
        console.log(error);
    })
    .then(() => {
    });







