export const randomiseSkills = () => {

    const skillsLoic = ["PHP", "HTML", "SCSS", "ExpressJS", "NodeJS", "Javascript"]

    const skillsRandom = skillsLoic

    for (let i = 0; i < skillsLoic.length; i++) {

        const skillsLenght = skillsLoic.length

        let randomValue = Math.floor(Math.random() * skillsLenght);

        let tmp = skillsRandom[i]

        skillsRandom[i] = skillsRandom[randomValue]

        skillsRandom[randomValue] = tmp
    }

    return skillsRandom




}

