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

function btnOverOne() {
  document.getElementById("overBtnOne").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.add("over__menu__btn__box--active");

  document.getElementById("overBtnTwo").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnThree").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnFour").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnFive").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnSix").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.remove("over__menu__btn__box--active");
};

function btnOverTwo() {
  document.getElementById("overBtnOne").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnTwo").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.add("over__menu__btn__box--active");

  document.getElementById("overBtnThree").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnFour").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnFive").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnSix").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.remove("over__menu__btn__box--active");
};

function btnOverThree() {
  document.getElementById("overBtnOne").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnTwo").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnThree").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.add("over__menu__btn__box--active");

  document.getElementById("overBtnFour").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnFive").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnSix").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.remove("over__menu__btn__box--active");
};

function btnOverFour() {
  document.getElementById("overBtnOne").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnTwo").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnThree").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnFour").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.add("over__menu__btn__box--active");

  document.getElementById("overBtnFive").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnSix").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.remove("over__menu__btn__box--active");
};

function btnOverFive() {
  document.getElementById("overBtnOne").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnTwo").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnThree").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnFour").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnFive").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.add("over__menu__btn__box--active");

  document.getElementById("overBtnSix").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.remove("over__menu__btn__box--active");
};

function btnOverSix() {
  document.getElementById("overBtnOne").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxOne").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnTwo").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxTwo").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnThree").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxThree").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnFour").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFour").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnFive").classList.remove("over__menu__btn--active");
  document.getElementById("overBtnBoxFive").classList.remove("over__menu__btn__box--active");

  document.getElementById("overBtnSix").classList.add("over__menu__btn--active");
  document.getElementById("overBtnBoxSix").classList.add("over__menu__btn__box--active");
};