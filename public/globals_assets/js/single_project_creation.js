import { requestServer } from './request.js'

export const singleProjectCreation = (getProject, link, allowTag = true) => {

    let location = document.location.origin
    let params = (new URL(document.location)).searchParams;

    requestServer(getProject).then(response => {

        const data = response.data

        let projectId = parseInt(params.get('projectId'))
        const projectOnPage = data.find(project => project.id === projectId)
        const currentProjectIndex = data.findIndex(project => project.id === projectId)


        let nextProjectIndex = currentProjectIndex + 1
        let previousProjectIndex = currentProjectIndex - 1


        if (previousProjectIndex === -1) {
            previousProjectIndex = data.length - 1
        }

        if (nextProjectIndex === data.length) {
            nextProjectIndex = 0
        }


        let nextProjectUrl = `${location}/${link}/pages/single_project.html?projectId=${data[nextProjectIndex].id}`
        let previousProjectUrl = `${location}/${link}/pages/single_project.html?projectId=${data[previousProjectIndex].id}`

        const singleProject = document.getElementById("single-project")

        let singleProjectImg = projectOnPage.images.hidpi

        if (singleProjectImg === null) {
            singleProjectImg = projectOnPage.images.normal
        }

        let description = projectOnPage.description

        singleProject.innerHTML += `
            <div id="texts">
                <h1 id="title">${projectOnPage.title}</h1>
                <div id="description">${description}</div>
            </div>
            <img class="img-project" src="${singleProjectImg}" alt="project">
            <div id="row-tag">
                <a href="${previousProjectUrl}" class="link-project">${data[previousProjectIndex].title}</a>
                <a href="" class="link-project">${data[currentProjectIndex].title}</a>
                <a href="${nextProjectUrl}" class="link-project">${data[nextProjectIndex].title}</a>
            </div>                
                <div class="row-skills"></div>
        `

        if (description === null) {
            const description = document.getElementById("description")
            description.style.color = "transparent"
        }

        if (allowTag) {
            document.getElementById("texts").innerHTML += `<div class="tags-row"></div>`
            const tagsRow = document.querySelector('.tags-row')
            const tags = projectOnPage.tags

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



        if (link === "jeanne") {
            document.getElementById("texts").innerHTML += `<img class="bg-txt" src="https://portfoliob1.herokuapp.com/jeanne/images/portfolio_single_bg_txt.svg" alt="">`
        }
    })
}

