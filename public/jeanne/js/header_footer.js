export const headerFooterCreation = () => {
    const location = document.location.origin

    const header = document.querySelector("header")

    header.innerHTML = `
    <a href="${location}/jeanne/index.html" class="logo"></a>
    <nav class="menu">
        <ul>
            <li><a href="${location}/jeanne/pages/portfolio.html">Portfolio<div class="line"></div></a></li>
            <li><a href="${location}/jeanne/pages/about_me.html">À propos<div class="line"></div></a></li>
            <li><a href="mailto:jeanne.vdp@outlook.fr">Contact<div class="line"></div></a></li>
            <li><img src="${location}/jeanne/images/nav_circle.svg" alt=""></li>
        </ul>
    </nav>`

    const footer = document.querySelector("footer")

    footer.innerHTML = `
    <h2>Blablater avec moi !</h2>
    <h3>jeanne.vdp@outlook.fr</h3>
    <h3>(+33) 07 85 49 96 23</h3>
    <div class="social-media">
        <a href="https://www.linkedin.com/in/lo%C3%AFc-gr%C3%A9co-a66175205/"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/Coyls"><i class="fab fa-github"></i></a>
    </div>
    <a id="to-top" href=""><i class="fas fa-arrow-up"></i></a>`
}



