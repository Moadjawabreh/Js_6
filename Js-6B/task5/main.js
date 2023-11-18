let btnclicked = document.getElementById("bar_Clicked");
let table = document.getElementById("table_det");

btnclicked.addEventListener("click", function () {
  table.style.visibility = "visible";
});
btnclicked.addEventListener("dblclick", function () {
  table.style.visibility = "hidden";
});
