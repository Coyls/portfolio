import { headerFooterCreation } from './header_footer.js'
import {requestProjects } from './request.js'

// const url = document.location.href
// console.log(url)

let params = (new URL(document.location)).searchParams;


headerFooterCreation()

requestProjects().then( response => {

    const data = response.data
    let projectId = parseInt(params.get('projectId'))
    const projectOnPage = data.find(project => project.id === projectId)
    const currentProjectIndex = data.findIndex(project => project.id === projectId)

    let nextProjectIndex = currentProjectIndex + 1
    let previousProjectIndex = currentProjectIndex - 1


    if (previousProjectIndex === -1) {
        previousProjectIndex = data.length -1
    }

    if (nextProjectIndex === data.length) {
        nextProjectIndex = 0
    }

 

    console.log(projectOnPage)

    const singleProject = document.getElementById("single-project")

    singleProject.innerHTML = `
        <div id="texts">
            <h1 id="title">${projectOnPage.title}</h1>
            <p id="description">${projectOnPage.description}</p>
        </div>
        <img src="${projectOnPage.images.hidpi}" alt="project">
        <div id="row-tag">
            <p class="link-project">${data[previousProjectIndex].title}</p>
            <p class="link-project">${data[currentProjectIndex].title}</p>
            <p class="link-project">${data[nextProjectIndex].title}</p>
        </div>
        <div class="row-skills"></div>
    
    `
})

