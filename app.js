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

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindwoOffline() {
  alert("no wifi");
}

title.addEventListener("click", handleTitleClick);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindwoOffline);
