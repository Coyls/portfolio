// Velocity of skills
export const velocity = (wrapperID) => {
    let additionalX = { val: 0 };
    let additionalXAnim;

    ScrollTrigger.create({
        trigger: `#${wrapperID}`,
        start: "top 100%",
        scroller: ".scroller",
        end: "top",
        onUpdate: self => {
            const velocity = self.getVelocity();

            if (velocity > 0) {
                if (additionalXAnim) additionalXAnim.kill();

                additionalX.val = -velocity / 500;
                additionalXAnim = gsap.to(additionalX, {
                    val: 0
                });
            }
        }
    })
}