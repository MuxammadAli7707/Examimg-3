let Openmodal = document.getElementById("openhome");
let Backmodal = document.getElementById("backhome");
let Demomodal = document.getElementById("sidebar");

let Openshop = document.getElementById("openshop");
let Backshop = document.getElementById("backshop");
let Shopmodal = document.getElementById("shop");

let Openpage = document.getElementById("openpage");
let Backpage = document.getElementById("backpage");
let Pagemodal = document.getElementById("page");

Openmodal.addEventListener('click', function () {
  Demomodal.classList.add('demo');
});

Backmodal.addEventListener('click', function () {
  Demomodal.classList.toggle('demo');
});

Openshop.addEventListener('click', function () {
  Shopmodal.classList.add('demo');
});

Backshop.addEventListener('click', function () {
  Shopmodal.classList.toggle('demo');
});

Openpage.addEventListener('click', function () {
  Pagemodal.classList.add('demo');
});

Backpage.addEventListener('click', function () {
  Pagemodal.classList.toggle('demo');
});

let cursor = document.querySelector(".cursor");
let cursorSpot = document.querySelector(".cursor-spot");

document.addEventListener("mousemove", function(b){
  cursor.style.cssText = cursorSpot.style.cssText = "left: " + b.clientX + "px; top: " + b.clientY + "px;";

  const anchors =  document.querySelectorAll("a");
  for(let a of anchors) {
    a.onmouseover = () => {
      cursor.classList.add("hover")
    }
    a.onmouseout = () => {
      cursor.classList.remove("hover")
    }
  }
});

var topbutton = document.getElementById('up');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topbutton.style.opacity = "1";
    topbutton.style.transition = "all 0.5s linner";
  } else {
    topbutton.style.opacity = "0";
    topbutton.style.transition = "all 0.5s linner";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
