//Подключение формы
window.onload = function () {
  var form = document.querySelector('.bg-form-mini');
  var button = document.querySelector('.letter-1');
  var close = document.querySelector('button');
  function show() {
      form.style.display = "flex";
  }
  function displaynone() {
      form.style.display = "none";
  }
  button.onclick = show;
  close.onclick = displaynone;
}
//Включение формы с кнопки
window.onload = function () {
  var form = document.querySelector('.bg-form-mini');
  var button = document.querySelector('.container_form');
  var close = document.querySelector('button');
  function show() {
      form.style.display = "flex";
  }
  function displaynone() {
      form.style.display = "none";
  }
  button.onclick = show;
  close.onclick = displaynone;
}
//Плавный скролл
$(".up-arrow").click(function(){
    $("html,body").animate({
        scrollTop:0},1000);
  })
$(".about").click(function(){
  $("html,body").animate({
    scrollTop:$("#nav").offset().top},1000);
})
$(".advantages").click(function(){
  $("html,body").animate({
    scrollTop:$("#advantages").offset().top},1000);
})
$(".letter").click(function(){
  $("html,body").animate({
    scrollTop:$("#lettel").offset().top},1000);
})
$(".contact").click(function(){
  $("html,body").animate({
    scrollTop:$("#contact").offset().top},1000);
})
// Здесь исчезает стрелка вверх
var up = document.querySelector(".up-arrow");

var arrowUp = up.getBoundingClientRect().top;

window.onscroll = function arrow() {
  if (up.classList.contains('arrow') && window.pageYOffset > arrowUp) {
    up.classList.remove('arrow');
  } else if (window.pageYOffset < arrowUp) {
    up.classList.add('arrow');
  }
};
//Магия бургера
$(".burger").click(function() {
  $(this).toggleClass('change').siblings('.smart_panel').slideToggle("slow");
  });

//аккордеон

let head = document.getElementsByClassName("order-item-header");
let desk = document.getElementsByClassName("order-item-description");
let arrow = document.getElementsByClassName("arrow-little");

head[0].onclick = function () {
    SHOW(0);
}
head[1].onclick = function () {
    SHOW(1);
}
head[2].onclick = function () {
    SHOW(2);
}
head[3].onclick = function () {
    SHOW(3);
}
head[4].onclick = function () {
  SHOW(4);
}
// здесь поворачивается стрелка

function SHOW(elementID) {
    if (desk[elementID].style.display == "none") {
      desk[elementID].style.display = "block";
        arrow[elementID].style.transform = "rotate(180deg)";

    }
    else {
      desk[elementID].style.display = "none";
        arrow[elementID].style.transform = "rotate(0deg)";

    }
}
