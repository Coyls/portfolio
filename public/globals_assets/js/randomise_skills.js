export const randomiseSkills = (skills) => {

    const skillsRandom = skills

    for (let i = 0; i < skills.length; i++) {

        const skillsLenght = skills.length

        let randomValue = Math.floor(Math.random() * skillsLenght);

        let tmp = skillsRandom[i]

        skillsRandom[i] = skillsRandom[randomValue]

        skillsRandom[randomValue] = tmp
    }

    return skillsRandom
}

