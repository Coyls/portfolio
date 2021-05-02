import { headerAnimationLogo } from "../../globals_assets/js/header_animation_logo.js";

export const headerFooterCreation = () => {
  const location = document.location.origin;

  const header = document.querySelector("header");

  header.innerHTML = `
    <a href="${location}/loic/index.html" class="logo"></a>
    <nav class="menu">
        <ul>
            <li><a href="${location}/loic/pages/portfolio.html">Portfolio<div class="line"></div></a></li>
            <li><a href="${location}/loic/pages/games.html">Games<div class="line"></div></a></li>
            <li><a href="${location}/loic/pages/about_me.html">About me<div class="line"></div></a></li>
            <li><a href="mailto:loic.greco@sfr.fr">Contact<div class="line"></div></a></li>
            <li><img src="${location}/loic/images/nav_hexagone.svg" alt=""></li>
        </ul>
    </nav>`;

  const footer = document.querySelector("footer");

  footer.innerHTML = `
    <h2>Come chat with me !</h2>
    <div id="footer-row">
        <div class="footer-items">
            <h3>loic.greco@sfr.fr</h3>
            <h3>(+33) 06 34 26 68 04</h3>
        </div>
        <div class="footer-items">
            <h3>Find me on social networks !</h3>
            <div class="social-media">
                <a href="https://www.linkedin.com/in/lo%C3%AFc-gr%C3%A9co-a66175205/"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/Coyls"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
    <a id="to-top" href=""><i class="fas fa-arrow-up"></i></a>
    <a id="msg" href="mailto:loic.greco@sfr.fr"></a>`;

  headerAnimationLogo(
    ".logo",
    "https://portfoliob1.herokuapp.com/loic/animations/animation_logo_loic.json"
  );
};
