export const requestProjects = async () => {
    const locationApi = "https://portfoliob1.herokuapp.com/"
    // const locationApi = "http://localhost:3000/"

    try {
        const response = await axios.get(`${locationApi}getProjectChloe`)
        return response
    } catch (err) {
        console.log(err)
    } 
}


