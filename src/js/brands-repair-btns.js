function hiddenCloseclick() {
  let btn = document.querySelector(".brands__show-btn-action");
  let btn2 = document.querySelector(".device-repair__show-btn-action");
  btn2.addEventListener("click", hiddenCloseclick);
  btn.addEventListener("click", hiddenCloseclick);
  let content = document.getElementsByClassName("brands__section--hidden");
  let contentShowDesctop = document.getElementsByClassName(
    "brands__section--show-desctop"
  );
  //let contentText = document.getElementsByClassName('brands__section__item');

  for (let i = 0; i < content.length; i++) {
    if (content[i].style.display === "none") {
      content[i].style.display = "block";
      btn.innerHTML = "Скрыть";
      btn2.innerHTML = "Скрыть";
    } else {
      content[i].style.display = "none";
      btn.innerHTML = "Показать все";
      btn2.innerHTML = "Показать все";
    }
  }

  for (let i = 0; i < contentShowDesctop.length; i++) {
    if (window.innerWidth > 1119) {
      contentShowDesctop[i].style.display = "block";
    }
  }
}
hiddenCloseclick();
