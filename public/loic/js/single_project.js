import {
    headerFooterCreation
} from './header_footer.js'
import {
    requestServer
} from '../../globals_assets/js/request.js'
import {
    carousselAnimation
} from '../../globals_assets/js/animation.js'
import {
    creationAnimation
} from '../../globals_assets/js/animation_creation.js'
import {
    headerAnimationLogo
} from '../../globals_assets/js/header_animation_logo.js'
import {
    skills
} from './skills.js'



let location = document.location.origin

let params = (new URL(document.location)).searchParams;

headerFooterCreation()
headerAnimationLogo('.logo','https://portfoliob1.herokuapp.com/loic/animations/animation_logo_loic.json')

requestServer('getProjectLoic').then(response => {

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


    let nextProjectUrl = `${location}/loic/pages/single_project.html?projectId=${data[nextProjectIndex].id}`
    let previousProjectUrl = `${location}/loic/pages/single_project.html?projectId=${data[previousProjectIndex].id}`

    const singleProject = document.getElementById("single-project")

    let singleProjectImg = projectOnPage.images.hidpi

    if (singleProjectImg === null) {
        singleProjectImg = projectOnPage.images.normal
    }

    singleProject.innerHTML += `
        <div id="texts">
            <h1 id="title">${projectOnPage.title}</h1>
            <p id="description">${projectOnPage.description}</p>
            <div class="tags-row"></div>
        </div>
        <img src="${singleProjectImg}" alt="project">
        <div id="row-tag">
            <a href="${previousProjectUrl}" class="link-project">${data[previousProjectIndex].title}</a>
            <a href="" class="link-project">${data[currentProjectIndex].title}</a>
            <a href="${nextProjectUrl}" class="link-project">${data[nextProjectIndex].title}</a>
        </div>
        <div class="row-skills"></div>`

    const tagsRow = document.querySelector('.tags-row')

    const tags = projectOnPage.tags

    console.log(tags)

    tags.forEach((tag, id) => {
        if (id === 3) {
            exit
        }
        tagsRow.innerHTML += `
                    <p class="tag">${tag}</p>
                `
    })

})

creationAnimation('.single-project-skills', 'single-project-wrapper', 'p-single-project', skills)
carousselAnimation('p-single-project')