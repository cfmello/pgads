const btnToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btnToTop.classList.add("active");
  } else {
    btnToTop.classList.remove("active");
  }
});

btnToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

console.log("Já codou seu Hello World hoje?");
