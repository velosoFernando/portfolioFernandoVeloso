function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburguer-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Mostrar/esconder botão ao rolar
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Voltar suavemente ao topo
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mostrar/esconder botão ao rolar
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  const footer = document.querySelector(".footer");

  // Exibe o botão após rolar um pouco
  if (window.scrollY > 400) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }

  // Detecta quando o botão encosta no rodapé
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (footerRect.top < windowHeight) {
    backToTop.classList.add("footer-active");
  } else {
    backToTop.classList.remove("footer-active");
  }
});

// Voltar suavemente ao topo
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Rolar suavemente até a seção "Sobre Mim"
document.getElementById("toAbout").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});
