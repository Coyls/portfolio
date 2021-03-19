 export const request = () => {

    const location = document.location.href

     console.log(location)

    axios.get(`${location}getAPiKey`).then(response => {
        // console.log(response.data, "api");
        console.log("Oui je recup bien ma key")

    }).catch(function (error) {
        console.error(error);
    });
}


