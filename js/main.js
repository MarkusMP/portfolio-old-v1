const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
const aLinks = document.querySelectorAll("nav a");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

burger.addEventListener("click", () => {
  console.log("clicked");
  links.classList.toggle("active");

  burger.classList.toggle("active");
});

window.onscroll = () => {
  const nav = document.querySelector("nav");

  if (this.scrollY <= 10) {
    line1.classList.remove("burgerScroll");
    line2.classList.remove("burgerScroll");
    line3.classList.remove("burgerScroll");
    nav.classList.remove("scroll");
    links.classList.remove("links-scroll");

    for (var i = 0; i < aLinks.length; i++) {
      aLinks[i].classList.remove("navColor");
    }
  } else {
    line1.classList.add("burgerScroll");
    line2.classList.add("burgerScroll");
    line3.classList.add("burgerScroll");
    nav.classList.add("scroll");
    links.classList.add("links-scroll");
    for (var i = 0; i < aLinks.length; i++) {
      aLinks[i].classList.add("navColor");
    }
  }
};

const texts = [
  "Software Developer                     ",
  "Full Stack Developer                     ",
  "Web Developer                     ",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length == currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 50);
})();

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

console.log(img01);
