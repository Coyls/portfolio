export const scrollTop = () => {
  const footer = document.querySelector("footer")

  if (footer.classList.contains("home-footer")) {
    footer.innerHTML += `
    <a id="to-top" href="">
      <i class="fas fa-arrow-up"></i>
    </a>`;
  } else {
    footer.innerHTML += `
    <div id="to-top">
      <i class="fas fa-arrow-up"></i>
    </div>`;

    const goTop = document.querySelector("#to-top");

    goTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }
};
