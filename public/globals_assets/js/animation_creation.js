import { randomiseSkills } from './randomise_skills.js'

export const creationAnimation = (containerVar, wrapperID, classP, skills) => {
    
    let skillsToUse = randomiseSkills(skills)
    
    const container = document.querySelector(`${containerVar}`);

    container.innerHTML += `
    <div id="${wrapperID}" class="wrapper"></div>`

    const wrapper = document.getElementById(wrapperID)


    skillsToUse.forEach((skill, id) => {

        wrapper.innerHTML += `<p class='${classP}' data-index="${id}">${skill}</p>`
    })

}



