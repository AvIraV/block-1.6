let contentBlocks = document.getElementsByClassName("wrapper--hidden wrapper");
let menuList = document.querySelector(".menu");
// let containerContent = document.querySelector('.');

function openHiddenMenu() {
  let burger = document.querySelector(".header-main__burger");
  let closeMenu = document.querySelector(".menu__header__item__close");

  if (burger) {
    burger.addEventListener("click", function (e) {
      document.body.classList.toggle("__lock");
      burger.classList.toggle("active");
      menuList.classList.toggle("open");

      for (let i = 0; i < contentBlocks.length; i++) {
        contentBlocks[i].classList.add("active");
        if (contentBlocks[i].classList.contains("active")) {
          contentBlocks[i].style.display = "none";
        }

        if (window.innerWidth > 767 && burger.classList.contains("active")) {
          contentBlocks[i].style.display = "block";
          contentBlocks[i].style.filter = "blur(8px)";

          menuList.style.backgroundColor = "#FFFFFF";
        }
      }
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", function (e) {
      closeMenu.classList.toggle("close");
      menuList.classList.toggle("hidden");

      for (let i = 0; i < contentBlocks.length; i++) {
        contentBlocks[i].classList.add("hidden");

        if (contentBlocks[i].classList.contains("hidden")) {
          contentBlocks[i].style.display = "block";
          menuList.style.display = "none";
        }

        if (window.innerWidth > 767 && closeMenu.classList.contains("close")) {
          contentBlocks[i].style.display = "block";
          contentBlocks[i].style.filter = "blur(0)";
        }
        //Закрываем меню
      }
    });
  }
}
openHiddenMenu();
