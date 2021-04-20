import { headerFooterCreation } from './header_footer.js'
import { requestServer} from './request.js'
import { splitElements} from './split_texts.js'

headerFooterCreation()

requestServer('getUserLoic').then(response => {

    console.log(response.data)

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

    bioParagraph.innerHTML = aboutMe
    formationParagraph.innerHTML = formation
    experiences.forEach(exp => {
        experiencesParagraph.innerHTML += `<p>${exp}</p>`
    })
    // ----------------------------


    console.log(aboutMe)
    console.log(formation)
    console.log(experiences)















})