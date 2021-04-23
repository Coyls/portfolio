export const carousselAnimation = (classP, reverse = "-=", time = 60) => {

    let imgArrConst = gsap.utils.toArray(`.${classP}`)

    gsap.set(imgArrConst, {
        left: 0
    })

    let pPosition = 0

    let totalW = 0

    let pWidths = {}

    imgArrConst.map((img, i) => {
        let pWidth = img.getBoundingClientRect().width
        //initial left position depending on previous photos
        let leftPosition = pPosition
        //positioning the images before moving them
        gsap.set(img, {
            left: (leftPosition)
        })
        pPosition += pWidth
        //calculating total imgs width
        totalW += pWidth
        //create hash of width per index
        pWidths[i] = totalW
    })




    gsap.to(`.${classP}`, {
        x: `${reverse}${totalW}`,
        duration: time,
        repeat: -1,
        ease: 'none',
        modifiers: {
            x: (x, arr) => {
                //finding the imgIndex in order to 
                //find what is it's initial leftPosition
                const imgIndex = arr.getAttribute('data-index')

                //figuring out what is it's maxleftposition so i can wrap it
                let maxLeftTravel = -pWidths[imgIndex]

                //figuring out what is it's maxrightposition so i can wrap it         
                let rightPositioning = totalW + maxLeftTravel

                //wrapping 
                let mod = gsap.utils.wrap(maxLeftTravel, rightPositioning)

                return `${mod(parseFloat(x))}px`
            }
        }


    });

}