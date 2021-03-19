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

// ----------------------------------------------------------- test api --------------------------------------------
// Set the Access Token
var accessToken = ';

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
        if (data.length > 0) {
            $.each(data.reverse(), function(i, val) {
                $('#shots').prepend(
                    '<a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.hidpi +'"/></a>'
                )
            })
        }
        else {
            $('#shots').append('<p>No shots yet!</p>');
        }
    }
});