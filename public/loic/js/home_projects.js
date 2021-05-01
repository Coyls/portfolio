import {
    requestServer
} from '../../globals_assets/js/request.js'


const location = document.location.origin


export const homeProjectsCreation = () => {

    requestServer("getProjectLoic").then(response => {

        let data = response.data;
        

        const projectsHomeText = document.querySelectorAll('.panel-text')
        const projectsHomeImg = document.querySelectorAll('.panel')

        data.forEach((frag, id) => {

            console.log(frag)
            console.log(id)
            const tags = frag.tags

            console.log(tags)

            if (tags.includes("nothomepage")) {
                data.splice(id, 1)
            }

        })

        projectsHomeImg.forEach((projectImg, id) => {
            let dataImg = data[id].images.hidpi

            if (dataImg === null) {
                dataImg = data[id].images.normal
            }

            projectImg.href = `${location}/loic/pages/single_project.html?projectId=${data[id].id}`


            projectImg.style.backgroundImage = `url('${dataImg}')`


        })

        projectsHomeText.forEach((projectText, id) => {

            projectText.innerHTML = `
                <h2>${data[id].title}</h2>   
                ${data[id].description}
                <div class="tags-row"></div>
            `

            const tagsRow = projectText.querySelector('.tags-row')

            const tags = data[id].tags

            if (tags.indexOf("nothomepage") !== -1) {
                tags.splice(tags.indexOf("nothomepage"), 1)
            }

            tags.forEach((tag, id) => {
                if (id < 3) {
                    tagsRow.innerHTML += `
                    <p class="tag">${tag}</p>
                `
                }
            })






        })


    })



}