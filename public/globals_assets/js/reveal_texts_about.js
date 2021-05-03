export const revealTextAbout = (toReveal) => {

    let reveals = gsap.utils.toArray(toReveal);

    reveals.forEach((reveal) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: reveal,
          marker: true,
          start: "top 60%",
        },
      });

      tl.to(reveal, { duration: 0.66, opacity: 1 });
    });

}