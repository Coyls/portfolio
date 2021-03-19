import { navBarAnimation } from './js/animation.js'
import { request } from './js/request.js'

request()
navBarAnimation()












/*
// ----------------------------------------------------------- test api --------------------------------------------
// Set the Access Token

var accessToken =

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
});*/
