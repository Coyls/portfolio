
import { requestServer } from './request.js'

export const portfolioCreation = (getProject, link) => {

    requestServer(getProject).then(response => {

        let data = response.data

        const container = document.getElementById('portfolio-projects')
        let gridColumn = 1
        let gridRow = 1



        let creationHeight = Math.ceil(data.length / 2)

        const layoutGrid = (height, width, column, row) => {
            container.style.gridTemplateColumns = `repeat(${width}, ${column}vw)`
            container.style.gridTemplateRows = `repeat(${height}, ${row}vh)`
        }

        if (document.documentElement.clientWidth < 700) {
            layoutGrid(data.length, 1, 100, 35)

        } else {

            layoutGrid(creationHeight, 2, 42, 55)

        }

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

            if (document.documentElement.clientWidth < 700) {
                gridRow++
            } else {

                if (gridColumn > 1) {
                    gridColumn = 1
                    gridRow++
                } else {
                    gridColumn++
                }

            }
        })



        let projects = document.querySelectorAll('.project')

        projects.forEach(project => {

            const idProject = project.dataset.idProject

            let location = document.location.origin

            let projectUrl = `${location}/${link}/pages/single_project.html?projectId=${idProject}`

            project.href = projectUrl

        })






    })

}

