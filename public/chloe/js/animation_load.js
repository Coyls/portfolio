const locationIndex = document.location.origin

let video = document.getElementById("animation-load")
video.onended = () => {

    location.replace(`${locationIndex}/chloe/index.html`)

};