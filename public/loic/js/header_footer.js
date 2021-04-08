export const headerFooterCreation = () => {
    const location = document.location.origin

    const header = document.querySelector("header")

    header.innerHTML = `
    <a href="${location}/loic/index.html" class="logo"></a>
    <nav class="menu">
        <ul>
            <li><a href="${location}/loic/pages/portfolio.html">Portfolio</a></li>
            <li><a href="${location}/loic/pages/about_me.html">À propos</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>`

    const footer = document.querySelector("footer")

    footer.innerHTML = `
    <h2>Venez discuter avec moi ! 🧐</h2>
    <h3>loic.greco@sfr.fr</h3>
    <h3>(+33) 06 34 26 68 04</h3>
    <div class="social-media">
        <a href="https://www.linkedin.com/in/lo%C3%AFc-gr%C3%A9co-a66175205/"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/Coyls"><i class="fab fa-github"></i></a>
    </div>
    <a id="to-top" href=""><i class="fas fa-arrow-up"></i></a>`
}



