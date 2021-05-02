import { headerAnimationLogo } from "../../globals_assets/js/header_animation_logo.js";

export const headerFooterCreation = () => {
  const location = document.location.origin;

  const header = document.querySelector("header");

  header.innerHTML = `
    <a href="${location}/chloe/index.html" class="logo"></a>
    <nav class="menu">
        <ul>
            <li><a href="${location}/chloe/pages/portfolio.html">Portfolio<div class="line"></div></a></li>
            <li><a href="${location}/chloe/pages/about_me.html">À propos<div class="line"></div></a></li>
            <li><a href="mailto:chloe.aitsiahmed@gmail.com">Contact<div class="line"></div></a></li>
            <li><img src="${location}/chloe/images/leaf_nav.svg" alt=""></li>
        </ul>
    </nav>`;

  const footer = document.querySelector("footer");

  footer.innerHTML = `
    <div id="footer-container">
        <h2>Conversons !</h2>
        <div id="footer-row">
            <div class="footer-items">
                <h3>chloe.aitsiahmed@gmail.com</h3>
                <h3>(+33) 07 81 52 49 30</h3>
            </div>
            <div class="footer-items">
                <h3>Retrouvez-moi sur les réseaux sociaux !</h3>
                <div class="social-media">
                    <a href="https://www.linkedin.com/in/chloé-ait-si-ahmed-72653a201"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/ch103_picdraw/"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <a id="to-top" href=""></a>
    <a id="msg" href="mailto:chloe.aitsiahmed@gmail.com"></a>`;

  headerAnimationLogo(
    ".logo",
    `${location}/chloe/animations/animation_logo_chloe.json`
  );
};
