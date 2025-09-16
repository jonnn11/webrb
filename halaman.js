const button = document.getElementById("button");
const img = document.getElementById("img");

button.addEventListener("click", function() {
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
});