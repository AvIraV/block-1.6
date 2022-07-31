function openHiddenPopapCall() {
  let contentBlocks = document.getElementsByClassName(
    "wrapper--hidden wrapper"
  );
  let openPopap = document.getElementsByClassName("menu__item-popap-call");
  let openPopapFeedback = document.querySelectorAll(
    ".menu__item-popap-feedback"
  );
  let closePopap = document.querySelectorAll(".popap__close");
  let popapContent = document.querySelector(".popap");
  let popapContentFeedback = document.querySelector(".popap__feedback");
  let menuList = document.querySelector(".menu");

  if (openPopap) {
    for (let call = 0; call < openPopap.length; call++) {
      let openBtnCall = openPopap[call];
      openBtnCall.addEventListener("click", function (e) {
        // document.body.classList.toggle("__lock");
        openBtnCall.classList.toggle("active");
        popapContent.classList.toggle("open");
        popapContent.style.display = "block";
        popapContent.style.overflowY = "scroll";
        menuList.style.filter = "blur(8px)";

        for (let i = 0; i < contentBlocks.length; i++) {
          contentBlocks[i].classList.add("active");
          if (contentBlocks[i].classList.contains("active")) {
            contentBlocks[i].style.filter = "blur(8px)";
            contentBlocks[i].addEventListener("click", function (e) {
              popapContent.style.display = "none";
              contentBlocks[i].style.filter = "blur(0)";
              menuList.style.filter = "blur(0)";
            });
          }
        }
      });
    }
  }

  if (openPopapFeedback) {
    for (let feedback = 0; feedback < openPopapFeedback.length; feedback++) {
      let openBtnFeedback = openPopapFeedback[feedback];
      openBtnFeedback.addEventListener("click", function (e) {
        // document.body.classList.toggle("__lock");
        openBtnFeedback.classList.toggle("active");
        popapContentFeedback.classList.toggle("open");
        popapContentFeedback.style.display = "block";
        popapContentFeedback.style.overflowY = "scroll";
        menuList.style.filter = "blur(8px)";

        for (let i = 0; i < contentBlocks.length; i++) {
          contentBlocks[i].classList.add("active");
          if (contentBlocks[i].classList.contains("active")) {
            contentBlocks[i].style.filter = "blur(8px)";
            contentBlocks[i].addEventListener("click", function (e) {
              popapContentFeedback.style.display = "none";
              contentBlocks[i].style.filter = "blur(0)";
              menuList.style.filter = "blur(0)";
            });
          }
        }
      });
    }
  }

  if (closePopap) {
    for (let j = 0; j < closePopap.length; j++) {
      let closeBtn = closePopap[j];
      closeBtn.addEventListener("click", function (e) {
        closeBtn.classList.toggle("close");
        popapContent.classList.toggle("hidden");
        popapContentFeedback.classList.toggle("hidden");

        for (let i = 0; i < contentBlocks.length; i++) {
          contentBlocks[i].classList.add("hidden");
          if (contentBlocks[i].classList.contains("hidden")) {
            contentBlocks[i].style.filter = "blur(0)";
            menuList.style.filter = "blur(0)";
            popapContent.style.display = "none";
            popapContentFeedback.style.display = "none";
          }
        }
      });
    }
  }
}
openHiddenPopapCall();
