function myFunction() {
  const dots = document.querySelector(".services__read-more__dots");
  const moreText = document.querySelector(".services__read-more");
  const btnText = document.querySelector(".services__read-more-btn");

  btnText.addEventListener("click", function () {
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Читать больше";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Скрыть";
      moreText.style.display = "inline";
    }
  });
}
myFunction();
