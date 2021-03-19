const axios = require('axios').default;

const burgerMenu = document.querySelector("#burger-menu")
const links = document.querySelector("#links")

burgerMenu.addEventListener("mouseenter", (e) => {
    links.classList.remove("displayNone")
})

burgerMenu.addEventListener("mouseleave", (e) => {
    links.classList.add("displayNone")
})

axios.get("https://portfoliob1.herokuapp.com/getAPiKey").then(response => {
    console.log(response.data, "api");

}).catch(function (error) {
    console.error(error);
});
