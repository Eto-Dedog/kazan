var swiper = new Swiper(".KazanSlider-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper = new Swiper(".OverSlider-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper = new Swiper(".Accessories-swiper", {
    navigation: {
      nextEl: ".Accessories-button-next",
      prevEl: ".Accessories-button-prev",
    },
    pagination: {
      el: ".Accessories-pagination",
      clickable: true,
    },
  });

var swiper = new Swiper(".Comment-swiper", {
    navigation: {
      nextEl: ".Comment-button-next",
      prevEl: ".Comment-button-prev",
    },
    pagination: {
      el: ".Comment-pagination",
      clickable: true,
    },
  });

function modal() {
  document.getElementById("modalOverlay").classList.remove("d-none");
}

function modalClose() {
  document.getElementById("modalOverlay").classList.add("d-none");
}

function btnOverOne() {
  document.getElementById("overBtnOne").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.add("over__menu__btn__box--active");
  document.getElementById("productOne").classList.remove("d-none");

  document.getElementById("overBtnTwo").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.remove("over__menu__btn__box--active");
  document.getElementById("productTwo").classList.add("d-none");

  document.getElementById("overBtnThree").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.remove("over__menu__btn__box--active");
  document.getElementById("productThree").classList.add("d-none");

  document.getElementById("overBtnFour").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.remove("over__menu__btn__box--active");
  document.getElementById("productFour").classList.add("d-none");

  document.getElementById("overBtnFive").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.remove("over__menu__btn__box--active");
  document.getElementById("productFive").classList.add("d-none");

  document.getElementById("overBtnSix").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.remove("over__menu__btn__box--active");
  document.getElementById("productSix").classList.add("d-none");
};

function btnOverTwo() {
  document.getElementById("overBtnOne").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.remove("over__menu__btn__box--active");
  document.getElementById("productOne").classList.add("d-none");

  document.getElementById("overBtnTwo").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.add("over__menu__btn__box--active");
  document.getElementById("productTwo").classList.remove("d-none");

  document.getElementById("overBtnThree").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.remove("over__menu__btn__box--active");
  document.getElementById("productThree").classList.add("d-none");

  document.getElementById("overBtnFour").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.remove("over__menu__btn__box--active");
  document.getElementById("productFour").classList.add("d-none");

  document.getElementById("overBtnFive").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.remove("over__menu__btn__box--active");
  document.getElementById("productFive").classList.add("d-none");

  document.getElementById("overBtnSix").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.remove("over__menu__btn__box--active");
  document.getElementById("productSix").classList.add("d-none");
};

function btnOverThree() {
  document.getElementById("overBtnOne").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.remove("over__menu__btn__box--active");
  document.getElementById("productOne").classList.add("d-none");

  document.getElementById("overBtnTwo").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.remove("over__menu__btn__box--active");
  document.getElementById("productTwo").classList.add("d-none");

  document.getElementById("overBtnThree").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.add("over__menu__btn__box--active");
  document.getElementById("productThree").classList.remove("d-none");

  document.getElementById("overBtnFour").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.remove("over__menu__btn__box--active");
  document.getElementById("productFour").classList.add("d-none");

  document.getElementById("overBtnFive").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.remove("over__menu__btn__box--active");
  document.getElementById("productFive").classList.add("d-none");

  document.getElementById("overBtnSix").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.remove("over__menu__btn__box--active");
  document.getElementById("productSix").classList.add("d-none");
};

function btnOverFour() {
  document.getElementById("overBtnOne").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.remove("over__menu__btn__box--active");
  document.getElementById("productOne").classList.add("d-none");

  document.getElementById("overBtnTwo").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.remove("over__menu__btn__box--active");
  document.getElementById("productTwo").classList.add("d-none");

  document.getElementById("overBtnThree").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.remove("over__menu__btn__box--active");
  document.getElementById("productThree").classList.add("d-none");

  document.getElementById("overBtnFour").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.add("over__menu__btn__box--active");
  document.getElementById("productFour").classList.remove("d-none");

  document.getElementById("overBtnFive").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.remove("over__menu__btn__box--active");
  document.getElementById("productFive").classList.add("d-none");

  document.getElementById("overBtnSix").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.remove("over__menu__btn__box--active");
  document.getElementById("productSix").classList.add("d-none");
};

function btnOverFive() {
  document.getElementById("overBtnOne").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.remove("over__menu__btn__box--active");
  document.getElementById("productOne").classList.add("d-none");

  document.getElementById("overBtnTwo").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.remove("over__menu__btn__box--active");
  document.getElementById("productTwo").classList.add("d-none");

  document.getElementById("overBtnThree").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.remove("over__menu__btn__box--active");
  document.getElementById("productThree").classList.add("d-none");

  document.getElementById("overBtnFour").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.remove("over__menu__btn__box--active");
  document.getElementById("productFour").classList.add("d-none");

  document.getElementById("overBtnFive").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.add("over__menu__btn__box--active");
  document.getElementById("productFive").classList.remove("d-none");

  document.getElementById("overBtnSix").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.remove("over__menu__btn__box--active");
  document.getElementById("productSix").classList.add("d-none");
};

function btnOverSix() {
  document.getElementById("overBtnOne").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.remove("over__menu__btn__box--active");
  document.getElementById("productOne").classList.add("d-none");

  document.getElementById("overBtnTwo").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.remove("over__menu__btn__box--active");
  document.getElementById("productTwo").classList.add("d-none");

  document.getElementById("overBtnThree").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.remove("over__menu__btn__box--active");
  document.getElementById("productThree").classList.add("d-none");

  document.getElementById("overBtnFour").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.remove("over__menu__btn__box--active");
  document.getElementById("productFour").classList.add("d-none");

  document.getElementById("overBtnFive").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.remove("over__menu__btn__box--active");
  document.getElementById("productFive").classList.add("d-none");

  document.getElementById("overBtnSix").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.add("over__menu__btn__box--active");
  document.getElementById("productSix").classList.remove("d-none");
};