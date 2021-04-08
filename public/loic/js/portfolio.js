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
        container.style.gridTemplateColumns = `repeat(${width}, 800px)`
        container.style.gridTemplateRows = `repeat(${height}, 600px)`
    }

    layoutGrid(creationHeight, 2)

    data.forEach(project => {
        container.innerHTML +=`
        <div class="project" style="grid-column: ${gridColumn}; grid-row: ${gridRow}; background-color: red;">

        </div>`

        if (gridColumn > 2) {
            gridColumn = 1
            gridRow++
        } else {
            gridColumn++
        }
    })











})






