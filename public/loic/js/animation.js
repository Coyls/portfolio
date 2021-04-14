export const carousselAnimation = () => {

    const imgArrConst = gsap.utils.toArray(".image-div p")

    gsap.set(imgArrConst, { left: 0 })

    let imagesPosition = 0

    const screenWidth = window.innerWidth

    let totalW = 0

    let imgWidths = {}

    imgArrConst.map((img, i) => {
        let imgWidth = img.getBoundingClientRect().width
        //initial left position depending on previous photos
        let leftPosition = imagesPosition
        //positioning the images before moving them
        gsap.set(img, { left: (leftPosition) })
        imagesPosition += imgWidth
        //calculating total imgs width
        totalW += imgWidth
        //create hash of width per index
        imgWidths[i] = totalW


    })


    let additionalX = { val: 0 };
    let additionalXAnim;
    let offset = 0;

    console.log(totalW)

    gsap.to(imgArrConst, {
        x: `-=${totalW}`,
        duration: 60,
        repeat: -1,
        ease: 'none',
        modifiers: {
            x: (x, arr) => {
                //finding the imgIndex in order to 
                //find what is it's initial leftPosition
                const imgIndex = arr.getAttribute('data-index')

                //figuring out what is it's maxleftposition so i can wrap it
                let maxLeftTravel = - imgWidths[imgIndex]

                //figuring out what is it's maxrightposition so i can wrap it         
                let rightPositioning = totalW + maxLeftTravel

                //wrapping 
                var mod = gsap.utils.wrap(maxLeftTravel, rightPositioning)
                offset += additionalX.val;
                // console.log(offset, 'offset')

                return `${mod(parseFloat(x) + offset)}px`
            }
        }
    });




    const imagesScrollerTrigger = ScrollTrigger.create({
        trigger: '.wraper',
        start: "top 80%",
        end: "bottom 50%",
        markers: true,
        onUpdate: function (self) {
            const velocity = self.getVelocity();

            if (velocity > 0) {
                if (additionalXAnim) additionalXAnim.kill();

                additionalX.val = -velocity / 500;
                additionalXAnim = gsap.to(additionalX, { val: 0 });
            }
        }
    })

}

