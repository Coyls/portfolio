import { requestProjects } from './request.js'

const location = document.location.origin


export const homeProjectsCreation = () => {

    requestProjects().then(response => {

        const data = response.data;
        const projectsHomeText = document.querySelectorAll('.panel-text')
        const projectsHomeImg = document.querySelectorAll('.panel')
        let dataIndex = 0;

        console.log(data)

        projectsHomeImg.forEach(projectImg => {
            let dataImg = data[dataIndex].images.hidpi

            if (dataImg === null) {
                dataImg = data[dataIndex].images.normal
            }

            projectImg.href = `${location}/loic/pages/single_project.html?projectId=${data[dataIndex].id}`


            projectImg.style.backgroundImage = `url('${dataImg}')`
            dataIndex++;

        })

        dataIndex = 0;

        projectsHomeText.forEach(projectText => {

            projectText.innerHTML = `
                <h2>${data[dataIndex].title}</h2>   
                ${data[dataIndex].description}
            `

            projectText.href = `${location}/loic/pages/single_project.html?projectId=${data[dataIndex].id}`


            dataIndex++
        })


    })



}