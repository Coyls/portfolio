import { headerFooterCreation } from './header_footer.js'
import { requestProjects } from './request.js'

headerFooterCreation()

requestProjects().then(response => {
    console.log(response.data)

    let data = response.data

    const container = document.getElementById('portfolio-projects')
    let gridColumn = 1
    let gridRow = 1


    let creationHeight = Math.ceil(data.length / 2)

    const layoutGrid = (height, width) => {
        container.style.gridTemplateColumns = `repeat(${width}, 42vw)`
        container.style.gridTemplateRows = `repeat(${height}, 55vh)`
    }

    layoutGrid(creationHeight, 2)

    data.forEach(project => {
        container.innerHTML += `
        <a href="" class="project" data-id-project="${project.id}" style="
                                grid-column: ${gridColumn}; 
                                grid-row: ${gridRow}; 
                                background-image: url('${project.images.normal}');
                                background-size: cover;
                                background-position: center;">

        </a>`

        if (gridColumn > 2) {
            gridColumn = 1
            gridRow++
        } else {
            gridColumn++
        }
    })

    // let projects = Array.from(document.getElementById("portfolio-projects").children)


    let projects = document.querySelectorAll('.project')

    projects.forEach(project => {

        const idProject = project.dataset.idProject

        console.log(idProject)

        let location = document.location.origin

        let projectUrl = `${location}/loic/pages/single_project.html?projectId=${idProject}`

        project.href = projectUrl

        console.log(project)
    })






})









