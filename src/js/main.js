let allBtn = document.querySelector(".projects__btn-all")
let livedBtn = document.querySelector(".projects__btn-lived")
let comersBtn = document.querySelector(".projects__btn-comers")

let projectsCards = document.querySelectorAll(".projects__card")
let projectsCardsComers = document.querySelectorAll(".projects__card-comers")
let projectsCardsLived = document.querySelectorAll(".projects__card-lived")

allBtn.onclick = function () {
    allBtn.classList.add("projects__btn-active")
    livedBtn.classList.remove("projects__btn-active")
    comersBtn.classList.remove("projects__btn-active")

    projectsCards.forEach(function (card) {
        card.style.display = "block"
    })
}

livedBtn.onclick = function () {
    livedBtn.classList.add("projects__btn-active")
    allBtn.classList.remove("projects__btn-active")
    comersBtn.classList.remove("projects__btn-active")

    projectsCardsComers.forEach(function (card) {
        card.style.display = "none"
    })

    projectsCardsLived.forEach(function (card) {
        card.style.display = "block"
    })
}

comersBtn.onclick = function () {
    comersBtn.classList.toggle("projects__btn-active")
    livedBtn.classList.remove("projects__btn-active")
    allBtn.classList.remove("projects__btn-active")

    projectsCardsLived.forEach(function (card) {
        card.style.display = "none"
    })

    projectsCardsComers.forEach(function (card) {
        card.style.display = "block"
    })
}

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".carousel__next",
        prevEl: ".carousel__prev",
    },
    loop: true
});

var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.884032, 74.596552],
        zoom: 18
    });
});

let burger = document.querySelector(".burger")
let headerList = document.querySelector(".header__list")

burger.onclick = function () {
    burger.classList.toggle("burger_active")
    headerList.classList.toggle("header__list_active")
}

