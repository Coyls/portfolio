const express = require("express");
const axios = require("axios");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname + "/public"));

// -- Create Links -- //

const createLink = (path, link = "") => {
  app.get(`/${link}`, (req, res) => {
    res.sendFile(__dirname + `/public/${path}`);
  });
};

// Root
createLink("loic/index.html");

// Index
createLink("loic/index.html", "loic");
createLink("jeanne/index.html", "jeanne");
createLink("chloe/index.html", "chloe");

// Animations
createLink("loic/pages/animation_load.html", "loic-load");
createLink("jeanne/pages/animation_load.html", "jeanne-load");
createLink("chloe/pages/animation_load.html", "chloe-load");

// -- Request Api Dribbble -- //

const requestAPiDribbble = async (key, link, path) => {
  const response = await axios.get(
    `https://api.dribbble.com/v2/${path}?access_token=${key}`
  );

  try {
    app.get(link, (req, res) => {
      res.send(response.data);
    });
  } catch (err) {
    console.log(err);
  }
};

// Shots
requestAPiDribbble(process.env.API_KEY_LOIC, "/getProjectLoic", "user/shots");
requestAPiDribbble(process.env.API_KEY_CHLOE, "/getProjectChloe", "user/shots");
requestAPiDribbble(process.env.API_KEY_JEANNE, "/getProjectJeanne", "user/shots");

// Users
requestAPiDribbble(process.env.API_KEY_LOIC, "/getUserLoic", "user");
requestAPiDribbble(process.env.API_KEY_JEANNE, "/getUserJeanne", "user");
requestAPiDribbble(process.env.API_KEY_CHLOE, "/getUserChloe", "user");

// -- Logs -- //

console.log("Env =", process.env.NODE_ENV);
console.log("Loic =", process.env.API_KEY_LOIC);
console.log("Chloe =", process.env.API_KEY_CHLOE);
console.log("Jeanne =", process.env.API_KEY_JEANNE);
console.log("Port =", process.env.PORT);

// -- port -- //

http.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
