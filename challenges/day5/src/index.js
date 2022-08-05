function handleInnerWidth() {
  if (window.innerWidth > 1200) {
    document.body.classList.add("background-yellow");
    document.body.classList.remove("background-purple");
    document.body.classList.remove("background-blue");
  } else if (window.innerWidth > 800) {
    document.body.classList.remove("background-yellow");
    document.body.classList.add("background-purple");
    document.body.classList.remove("background-blue");
  } else {
    document.body.classList.remove("background-yellow");
    document.body.classList.remove("background-purple");
    document.body.classList.add("background-blue");
  }
}

handleInnerWidth(); // Initialize
window.addEventListener("resize", handleInnerWidth);
