export const scrollAnimation = () => {

    let Scrollbar = window.Scrollbar;

    let bodyScrollBar = Scrollbar.init(document.querySelector('body'), {
        damping: 0.1,
        delegateTo: document,
    });

    ScrollTrigger.scrollerProxy(".scroller", {
        scrollTop(value) {
            if (arguments.length) {
                bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    let images = gsap.utils.toArray('.panel:not(.project-3-img)');

    images.forEach((image, i) => {

        let tl = gsap.timeline({

            scrollTrigger: {
                trigger: "section.home-projects",
                scroller: ".scroller",
                start: () => "top -" + (window.innerHeight * (i + 0.5)),
                end: () => "+=" + window.innerHeight,
                scrub: true,
                toggleActions: "play none reverse none",
                invalidateOnRefresh: true,
            }

        })

        tl.to(image, { 
            y: -1080,
         })

        // height: 0

    });

    gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

    let texts = gsap.utils.toArray('.panel-text');

    texts.forEach((text, i) => {

        let tl = gsap.timeline({

            scrollTrigger: {
                trigger: "section.home-projects",
                scroller: ".scroller",
                start: () => "top -" + (window.innerHeight * i),
                end: () => "+=" + window.innerHeight,
                scrub: true,
                toggleActions: "play none reverse none",
                invalidateOnRefresh: true,
            }

        })

        tl
            .to(text, { duration: 0.33, opacity: 1, y: "50%" })
            .to(text, { duration: 0.33, opacity: 0, y: "0%" , height: 0}, 0.66)
            

            ;

    });

    ScrollTrigger.create({

        trigger: "section.home-projects",
        scroller: ".scroller",
        scrub: true,
        pin: true,
        start: () => "top top",
        end: () => "+=" + ((images.length + 1) * window.innerHeight),
        invalidateOnRefresh: true,

    });

}
