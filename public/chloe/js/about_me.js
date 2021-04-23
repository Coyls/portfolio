import { headerFooterCreation } from './header_footer.js'
import { requestServer} from '../../globals_assets/js/request.js'
import { splitElements} from '../../globals_assets/js/split_texts.js'

headerFooterCreation()

requestServer('getUserChloe').then(response => {

    // console.log(response.data)

    let bio = response.data.bio

    // Split texts
    const aboutMe = splitElements(bio,'$')
    const formation = splitElements(bio,'§')
    const experiencesContainer = splitElements(bio,'µ')
    const experiences = splitElements(experiencesContainer,'*',true)

    // Create html
    const bioParagraph = document.getElementById('bio-paragraph')
    const formationParagraph = document.getElementById('formation-paragraph')
    const experiencesParagraph = document.getElementById('experience-paragraph')

    bioParagraph.innerText = aboutMe
    formationParagraph.innerText = formation
    experiences.forEach((exp,id) => {
        experiencesParagraph.innerHTML += `<p id="line-${id}"></p>`

        const lineId = experiencesParagraph.querySelector(`#line-${id}`)

        exp = exp.split("°")

        exp.forEach(block => {
            block = block.split("")

            if (block[0] === "£") {
                block = block.splice(0,1)

                block = block.join("")

                lineId.innerHTML += `<strong>${block}</strong>`
            } else {
                block = block.join("")

                lineId.innerHTML += `${block}`

            }
        })
        
    })
    // ----------------------------


    /* console.log(aboutMe)
    console.log(formation)
    console.log(experiences) */















})