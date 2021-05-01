import {
    requestServer
} from './request.js'
import {
    splitElements
} from './split_texts.js'
import {
    textToStrong
} from './to_Strong.js'

export const aboutMeCreation = (getUser) => {

    requestServer(getUser).then(response => {

        let bio = response.data.bio

        // Split texts
        const aboutMe = splitElements(bio, '$')
        const formation = splitElements(bio, '§')
        const experiencesContainer = splitElements(bio, 'µ')
        const experiences = splitElements(experiencesContainer, '*', true)

        // Create html
        const bioParagraph = document.getElementById('bio-paragraph')
        const formationParagraph = document.getElementById('formation-paragraph')
        const experiencesParagraph = document.getElementById('experience-paragraph')

        bioParagraph.innerText = aboutMe
        formationParagraph.innerText = formation

        // Text To Strong
        textToStrong(experiences, experiencesParagraph)

    })

}