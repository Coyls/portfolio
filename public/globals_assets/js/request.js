export const requestServer = async (path) => {
    const locationApi = document.location.origin

    console.log(`${locationApi}${path}`);


    const response = await axios.get(`${locationApi}/${path}`)


    try {
        return response
    } catch (err) {
        console.log("error request.js"+ err)
    }
}




