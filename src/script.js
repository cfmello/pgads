const btnToTop = document.getElementById("back-to-top");
const calendarBtn = document.getElementById("calendar-btn");

calendarBtn.addEventListener("click", () => {
  alert(
    "Em breve seu calendário aparecerá aqui! Fique a vontade para criar a API e contribuir com nossa página."
  );
});

const scrollToTop = () => {
  if (window.scrollY > 100) {
    btnToTop.classList.add("active");
  } else {
    btnToTop.classList.remove("active");
  }
};

window.addEventListener("scroll", scrollToTop);

btnToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

console.log("Já codou seu Hello World hoje?");
