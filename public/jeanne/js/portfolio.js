import { headerFooterCreation } from './header_footer.js'
import { requestServer } from '../../globals_assets/js/request.js'
import { carousselAnimation } from '../../globals_assets/js/animation.js'
import { creationAnimation } from '../../globals_assets/js/animation_creation.js'
import { skills } from './skills.js'

headerFooterCreation()

requestServer('getProjectLoic').then(response => {
    console.log(response.data)

    let data = response.data

    const container = document.getElementById('portfolio-projects')
    let gridColumn = 1
    let gridRow = 1


    let creationHeight = Math.ceil(data.length / 2)

    console.log(creationHeight)

    const layoutGrid = (height, width) => {
        container.style.gridTemplateColumns = `repeat(${width}, 42vw)`
        container.style.gridTemplateRows = `repeat(${height}, 55vh)`
    }

    layoutGrid(creationHeight, 2)

    data.forEach(project => {
        let imgProject = project.images.hidpi

        if (imgProject === null) { 
            imgProject = project.images.normal
        }

        container.innerHTML += `
        <a href="" class="project" data-id-project="${project.id}" style="grid-column: ${gridColumn}; grid-row: ${gridRow}; background-image: url('${imgProject}');">
            <div class="hover-project">
                <h2 class="title-portfolio">${project.title}</h2>
            </div> 
        </a>`

        if (gridColumn > 1) {
            gridColumn = 1
            gridRow++
        } else {
            gridColumn++
        }
    })

    let projects = document.querySelectorAll('.project')

    projects.forEach(project => {

        const idProject = project.dataset.idProject

        let location = document.location.origin

        let projectUrl = `${location}/jeanne/pages/single_project.html?projectId=${idProject}`

        project.href = projectUrl

    })






})

creationAnimation('.portfolio-skills','portfolio-wrapper', 'p-portfolio', skills)
carousselAnimation('p-portfolio','-=',120)









