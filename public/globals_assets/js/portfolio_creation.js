
import { requestServer } from './request.js'

export const portfolioCreation = (getProject, link) => {

    requestServer(getProject).then(response => {
    
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
    
            let projectUrl = `${location}/${link}/pages/single_project.html?projectId=${idProject}`
    
            project.href = projectUrl
    
        })
    
    
    
    
    
    
    })

}

