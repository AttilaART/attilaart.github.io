function handleMenuButton() {
  var fullScreenNav = document.getElementById("fullscreen-nav");

  if (fullScreenNav.classList.contains("show")) {
    fullScreenNav.classList.remove("show");
  } else {
    fullScreenNav.classList.add("show");
  }
}
