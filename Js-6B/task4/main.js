let button = document.getElementById("btn");
let arrayOfObjects = [];
var counter;
let divCont = document.getElementById("table_cont");
let table = document.getElementById("tablee");

button.addEventListener("click", function () {
  counter = 0;
  let namee = document.getElementById("namee").value;
  let email = document.getElementById("emaill").value;
  let number = document.getElementById("numberr").value;
  obj = {
    nameY: namee,
    emailY: email,
    numberY: number,
  };

  document.getElementById("name").innerHTML = "Name: " + obj.nameY;
  document.getElementById("gmail").innerHTML = "Email: " + obj.emailY;
  document.getElementById("number").innerHTML = "Number: " + obj.numberY;

  let nameCol = document.createElement("p");
  nameCol.id = "cols";
  nameCol.textContent = obj.nameY;

  let emailCol = document.createElement("p");
  emailCol.id = "cols";
  emailCol.textContent = obj.emailY;

  let numberCol = document.createElement("p");
  numberCol.id = "cols";
  numberCol.textContent = obj.numberY;

  let tablee = document.createElement("div");
  tablee.id = "tablee";
  tablee.appendChild(nameCol);
  tablee.appendChild(emailCol);
  tablee.appendChild(numberCol);
  divCont.appendChild(tablee);
});

// function func(object) {
//     document.getElementById("name").innerHTML = "Name: " + object.nameY;
// document.getElementById("gmail").innerHTML = "Email: " + object.emailY;
// document.getElementById("number").innerHTML = "Number: " + object.number;

// }
