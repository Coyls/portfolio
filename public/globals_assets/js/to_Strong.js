export const textToStrong = (toStrong, containerStrong) => {

    toStrong.forEach((exp,id) => {
        containerStrong.innerHTML += `<p id="line-${id}"></p>`

        const lineId = containerStrong.querySelector(`#line-${id}`)

        exp = exp.split("°")

        exp.forEach(block => {

            block = block.split("")

            if (block[0] === "£") {
                block.splice(0,1)

                block = block.join("")

                lineId.innerHTML += `<strong>${block}</strong>`
            } else {
                block = block.join("")

                lineId.innerHTML += `${block}`

            }
        })
        
    })

}