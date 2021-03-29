 export const requestProjects = () => {
    const location = document.location.href

    axios.get(`${location}getProject`).then(response => {
        console.log(response.data)

    }).catch(error => {
        console.error(error);
    });
}


