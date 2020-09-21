@@include("swiper-bundle.min.js");
@@include("some.js");

let headerSwiper;
let sliderHeader = document.querySelector(".header__content");

function mobileSlider() {
  if (window.innerWidth <= 1200 && sliderHeader.dataset.mobile == "false") {
    headerSwiper = new Swiper(".header__content", {
      slidesPerView: 1,
      slideClass: "header__item",
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
    sliderHeader.dataset.mobile = "true";
  }
  if (window.innerWidth > 1200) {
    sliderHeader.dataset.mobile = "false";
    // headerSwiper.destroy();
  }
}
mobileSlider();
window.addEventListener("resize", mobileSlider);

let mainSwiper = new Swiper(".main-screen__slider", {
  slidesPerView: 1,
  loop: true,
  //   slideClass: "main-screen__slide",
  // If we need pagination
  pagination: {
    el: ".main-screen__pagination",
  },
  fadeEffect: {
    crossFade: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".main-screen__next",
    prevEl: ".main-screen__prev",
  },
});

// tabs
let tabsSlider = new Swiper(".tabs__body", {
  slidesPerView: 1,
  loop: true,
  //   slideClass: "main-screen__slide",
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".tabs__next",
    prevEl: ".tabs__prev",
  },
});

let tabsLinks = document.querySelectorAll(".tabs__tabs ul li");
let tabsContent = document.querySelectorAll(".tabs__body");
for (let el of tabsLinks) {
  el.addEventListener("click", () => {
    document
      .querySelector(".tabs__tabs ul li.active")
      .classList.remove("active");
    document
      .querySelector(".tabs__body.tabs__body_active")
      .classList.remove("tabs__body_active");

    const parentListItem = el.parentElement;
    el.classList.add("active");
    const index = [...parentListItem.children].indexOf(el);
    const panel = [...tabsContent].filter(
      (el) => el.getAttribute("data-index") == index
    );
    panel[0].classList.add("tabs__body_active");
  });
}
