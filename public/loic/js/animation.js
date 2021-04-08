/* export const navBarAnimation = () => {
    const burgerMenu = document.querySelector("#burger-menu")
    const links = document.querySelector("#links")

    burgerMenu.addEventListener("mouseenter", () => {
        links.classList.remove("displayNone")
    })

    burgerMenu.addEventListener("mouseleave", () => {
        links.classList.add("displayNone")
    })
} */

gsap.to(".text-run", {
    duration: 20, 
    x: 1500, 
    reversed: false,
})