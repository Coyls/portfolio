import { requestServer } from '../../globals_assets/js/request.js'

const location = document.location.origin


export const homeProjectsCreation = () => {

    requestServer("getProjectLoic").then(response => {

        const data = response.data;
        const projectsHomeText = document.querySelectorAll('.panel-text')
        const projectsHomeImg = document.querySelectorAll('.panel')

        projectsHomeImg.forEach((projectImg, id) => {
            let dataImg = data[id].images.hidpi

            if (dataImg === null) {
                dataImg = data[id].images.normal
            }

            // projectImg.href = `${location}/jeanne/pages/single_project.html?projectId=${data[id].id}`


            projectImg.style.backgroundImage = `url('${dataImg}')`


        })

        projectsHomeText.forEach((projectText,id) => {

            projectText.innerHTML = `
                <h2>${data[id].title}</h2>   
                ${data[id].description}
                <div class="tags-row"></div>
            `

            projectText.href = `${location}/jeanne/pages/single_project.html?projectId=${data[id].id}`

            const tagsRow = projectText.querySelector('.tags-row')
            
            const tags = data[id].tags

            tags.forEach((tag,id) => {
                if (id === 3) { exit }
                tagsRow.innerHTML += `
                    <p class="tag">${tag}</p>
                `

                

            })

            




        })


    })



}