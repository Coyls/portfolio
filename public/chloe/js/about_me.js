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
    experiences.forEach(exp => {
        const expStrong = splitElements(exp,'°',false,true)

        console.log(expStrong)

        console.log(exp)
        
        experiencesParagraph.innerHTML += `<p>${exp}</p>`
    })
    // ----------------------------


    /* console.log(aboutMe)
    console.log(formation)
    console.log(experiences) */















})