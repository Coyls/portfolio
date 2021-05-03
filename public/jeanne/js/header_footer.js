import { scrollTop } from "../../globals_assets/js/scroll_top.js";

export const headerFooterCreation = () => {
  const location = document.location.origin;

  const header = document.querySelector("header");

  header.innerHTML = `
    <a href="${location}/jeanne/index.html" class="logo"></a>
    <nav class="menu">
        <ul>
            <li><a href="${location}/jeanne/pages/portfolio.html">Portfolio<div class="line"></div></a></li>
            <li><a href="${location}/jeanne/pages/about_me.html">À propos<div class="line"></div></a></li>
            <li><a href="mailto:jeanne.vdp@outlook.fr">Contact<div class="line"></div></a></li>
            <li><img src="${location}/jeanne/images/nav_circle.svg" alt=""></li>
        </ul>
    </nav>`;

  const footer = document.querySelector("footer");

  footer.innerHTML = `
    <h2>Blablatez avec moi !</h2>
    <div id="footer-row">
        <div class="footer-items">
            <h3>jeanne.vdp@outlook.fr</h3>
            <h3>(+33) 07 85 49 96 23</h3>
        </div>
        <div class="footer-items">
            <h3>Retrouvez-moi sur les réseaux sociaux !</h3>
            <div class="social-media">
                <a href="https://www.linkedin.com/in/jeanne-vandepoortaele-9b45b319b/"><i class="fab fa-linkedin"></i></a>
                <a href="https://instagram.com/jeanne.vandepoortaele?igshid=yvkz0xszyc1u"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
    <a id="msg" href="mailto:jeanne.vdp@outlook.fr"></a>`;

  scrollTop();
};
