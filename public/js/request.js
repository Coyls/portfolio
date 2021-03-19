 export const requestToken = () => {
    const location = document.location.href

    axios.get(`${location}getAPiKey`).then(response => {
        console.log("Clef recuperer")

        let options = {
            method: 'GET',
            url: 'https://api.dribbble.com/v2/user/shots?access_token='+response.data,
            dataType: 'json',
        };

        axios.request(options).then(response => {
            console.log(response.data)
        })

    }).catch(error => {
        console.error(error);
    });
}


