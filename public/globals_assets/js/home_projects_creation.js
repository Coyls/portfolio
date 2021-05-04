import { requestServer } from './request.js'

const location = document.location.origin

export const homeProjectsCreation = (getProject, link, allowTag = true) => {

    requestServer(getProject).then(response => {

        let tmpData = response.data;

        const projectsHomeText = document.querySelectorAll('.panel-text')
        const projectsHomeImg = document.querySelectorAll('.panel')

        let data = []

        // Take projects authorize on home page
        tmpData.forEach((frag, id) => {

            const tags = frag.tags

            if (!tags.includes("nothomepage")) {
                console.log("OK ON PAGE", frag.title)
                data.push(frag)
            } else {
                console.log("! PAS SUR LA PAGE", frag.title)
            }

        })

        // Fill images
        projectsHomeImg.forEach((projectImg, id) => {
            let dataImg = data[id].images.hidpi

            if (dataImg === null) {
                dataImg = data[id].images.normal
            }

            projectImg.href = `${location}/${link}/pages/single_project.html?projectId=${data[id].id}`


            projectImg.style.backgroundImage = `url('${dataImg}')`


        })
        
        // Fill texts
        projectsHomeText.forEach((projectText, id) => {
            let description = data[id].description
            
            console.log('description:', description)


            if (description === null) {
                description = ""
            }


            projectText.innerHTML = `
                <h2>${data[id].title}</h2>   
                ${description}
            `
            if (allowTag) {

                projectText.innerHTML += `<div class="tags-row"></div>`
                const tagsRow = projectText.querySelector('.tags-row')
                const tags = data[id].tags

                if (tags.indexOf("nothomepage") !== -1) {
                    const indexTag = tags.indexOf("nothomepage")
                    tags.splice(indexTag, 1)
                }

                tags.forEach((tag, id) => {
                    if (id < 3) {
                        tagsRow.innerHTML += `<p class="tag">${tag}</p>`
                    }
                })
            }

        })


    })



}