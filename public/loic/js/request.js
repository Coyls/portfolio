export const requestProjects = async () => {
    const locationApi = "https://portfoliob1.herokuapp.com/"
    // const locationApi = "http://localhost:3000/"

    const response = await axios.get(`${locationApi}getProjectChloe`)

    try {
        return response
    } catch (err) {
        console.log("error request.js"+ err)
    }
}


