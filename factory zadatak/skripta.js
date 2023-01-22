/*
let currentIndex = 0;
const images = document.querySelectorAll("#slider img");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);

function moveLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateSlider();
}

function moveRight() {
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  images.forEach((image, index) => {
    const x = (index - currentIndex) * 100;
    image.style.transform = `translateX(${x}%)`;
  });
}
*/

$("#arrow-left").click(function(){
  $("#image1").animate({left: "-=100px"}, 1000);
  $("#image2").animate({left: "-=100px"}, 1000);
  $("#image3").animate({left: "-=100px"}, 1000);
  $("#image4").animate({left: "-=100px"}, 1000);
  $("#image5").animate({left: "-=100px"}, 1000);
  $("#image6").animate({left: "-=100px"}, 1000);
  $("#image7").animate({left: "-=100px"}, 1000);
  $("#image8").animate({left: "-=100px"}, 1000);
  $("#image9").animate({left: "-=100px"}, 1000);
});

$("#arrow-right").click(function(){
  $("#image1").animate({left: "+=100px"}, 1000);
  $("#image2").animate({left: "+=100px"}, 1000);
  $("#image3").animate({left: "+=100px"}, 1000);
  $("#image4").animate({left: "+=100px"}, 1000);
  $("#image5").animate({left: "+=100px"}, 1000);
  $("#image6").animate({left: "+=100px"}, 1000);
  $("#image7").animate({left: "+=100px"}, 1000);
  $("#image8").animate({left: "+=100px"}, 1000);
  $("#image9").animate({left: "+=100px"}, 1000);
});

