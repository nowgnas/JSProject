const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMousEnter() {
  title.innerText = "mouse is here";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMousEnter);
title.addEventListener("mouseleave", handleMouseLeave);
