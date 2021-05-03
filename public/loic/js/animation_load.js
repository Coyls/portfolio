let video = document.getElementById("animation-load")

video.onended = () => {

    location.replace(`${document.location.origin}/loic/index.html`)

};