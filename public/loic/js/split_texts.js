export const splitElements = (arrayToSplit, character, isList = false) => {

    let arraySplit = arrayToSplit.split('')
    let mark = false
    let idStart = 0
    let idEnd = 0
    let result = arraySplit
    let arrayToReturn = []
    let i = 0

    arraySplit.forEach((char, id) => {
        if (char === character && !mark) {
            idStart = id + 1
            mark = true
        } else if (char === character && mark) {
            idEnd = id
            mark = false

            if (isList) {
                let t = result.slice(idStart, idEnd)
                arrayToReturn[i] = t.join('')
                i++
            }
        }
    })

    if (isList) {
        return arrayToReturn
    } else {
        result = result.slice(idStart, idEnd)
        result = result.join('')
        return result
    }
}