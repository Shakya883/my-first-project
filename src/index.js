// Add your code here
document.getElementById("changeColor").addEventListener("click", function () {
  const body = document.body;
  const isDark = body.style.backgroundColor === "rgb(51, 51, 51)";

  body.style.backgroundColor = isDark ? "#f0f0f0" : "#333333";
  body.style.color = isDark ? "#333333" : "#f0f0f0";
});
