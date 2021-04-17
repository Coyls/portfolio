import { skillsLoic } from './skills.js'

export const creationAnimation = (containerVar, wrapperID, classP) => {

    const container = document.querySelector(`${containerVar}`);

    container.innerHTML += `
    <div id="${wrapperID}" class="wrapper"></div>`

    const wrapper = document.getElementById(wrapperID)


    skillsLoic.forEach((skill, id) => {

        wrapper.innerHTML += `<p class='${classP}' data-index="${id}">${skill}</p>`
    })

}

