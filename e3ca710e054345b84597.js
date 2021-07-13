import "../style.less";

let navFirst = document.querySelector(".nav__link-first");
let navSecond = document.querySelector(".nav__link-second");
let arrow = document.querySelector(".arrow__link");
let scrollToMain = document.querySelector(".main");
let scrollToCompany = document.querySelector(".company");

/* Scroll */
let scrollTo = (element) => {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
};

navFirst.addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo(scrollToMain);
});

arrow.addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo(scrollToMain);
});

navSecond.addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo(scrollToCompany);
});

/* Filter */
$(() => {
  let filter = document.querySelectorAll("[data-filter]");
  let height = document.querySelector(".main .container");
  for (let item of filter) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      for (let block of document.querySelectorAll("[data-item]")) {
        if (item.dataset.filter == "all") {
          $("[data-item]").css("display", "block");
          $(height).css("height", "2050px");
          $(".main__item-third").css("top", "1150px");
          $(".main__item-fougth").css("top", "1200px");
        }
        if (item.dataset.filter == "build") {
          $("[data-item='active']").fadeOut("slow", "swing");
          $("[data-item='build']").fadeIn("slow", "swing");
        }

        if (item.dataset.filter == "active") {
          $("[data-item='build']").fadeOut("slow", "swing");
          $("[data-item='active']").fadeIn("slow", "swing");
          $("[data-item='active']").css("opacity", "1");
          $("[data-item='build']").css("opacity", "1");

          $(".main__item-third").addClass("animate__animated animate__fadeInDown animate__delay-.6s");
        setTimeout( () => {
       $(".main__item-fougth").addClass("animate__animated animate__fadeInDown animate__delay-.6s");
       $(".main__item-fougth").css("opacity", "1");
      }, 100 )
      $(".main__item-third").css("opacity", "1");
        }

        if (item.dataset.filter == block.dataset.item) {
          $(height).css("height", "1150px");
          $("[data-item='active']").css("top", "140px");
          $("[data-item='active']").css("opacity", "1");
        }
      }
    });
  }
});

window.addEventListener("scroll", () => {

  setTimeout( () => {
    if(pageYOffset >= 2300 ) {
      $(".company__intro-title").addClass("animate__animated animate__fadeInDown animate__delay-.6s");
      $(".company__intro-title").css("opacity", "1")
    } if(pageYOffset <= 2200) {
      $(".company__intro-title").removeClass("animate__animated animate__fadeInDown animate__delay-.6s");
      $(".company__intro-title").css("opacity", "0")
    }
  }, 5000 )
  if(pageYOffset >= 2300 ) {
      $(".company__intro-title").addClass("animate__animated animate__fadeInDown animate__delay-.6s");
      $(".company__intro-title").css("opacity", "1")
    } if(pageYOffset <= 1800) {
      $(".company__intro-title").removeClass("animate__animated animate__fadeInDown animate__delay-.6s");
      $(".company__intro-title").css("opacity", "0")
    }
    if(pageYOffset >= 630) {
      $(".main__item-first").addClass("animate__animated animate__fadeInLeft animate__delay-.6s");
      $(".main__item-first").css("opacity", "1");
      setTimeout( () => {
      $(".main__item-second").addClass("animate__animated animate__fadeInRight animate__delay-.6s");
      $(".main__item-second").css("opacity", "1");
    }, 150);
    }
    if(pageYOffset <= 320) {
      $(".main__item-first").removeClass("animate__animated animate__fadeInLeft animate__delay-.6s");
      $(".main__item-second").removeClass("animate__animated animate__fadeInRight animate__delay-.6s");
      $(".main__item-first").css("opacity", "0")
      $(".main__item-second").css("opacity", "0")
    }

    if(pageYOffset >= 1000) {
      
      $(".main__item-third").addClass("animate__animated animate__fadeInDown animate__delay-.6s");
        setTimeout( () => {
       $(".main__item-fougth").addClass("animate__animated animate__fadeInDown animate__delay-.6s");
       $(".main__item-fougth").css("opacity", "1");
      }, 100 )
      $(".main__item-third").css("opacity", "1");
    }

    if(pageYOffset <= 320) {
      $(".main__item-third").removeClass("animate__animated animate__fadeInDown animate__delay-.6s");
       $(".main__item-fougth").removeClass("animate__animated animate__fadeInDown animate__delay-.6s");
      $(".main__item-third").css("opacity", "0");
      $(".main__item-fougth").css("opacity", "0");
    }
})

