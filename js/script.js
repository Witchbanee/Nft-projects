const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
});


// модалка


let send = document.querySelector(".form__down-button");
let popup = document.querySelector(".modal_visual_hidden");
let closes = document.querySelector(".modal__close-button");

send.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("show-modal");
});

closes.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("show-modal");
});

// ________________