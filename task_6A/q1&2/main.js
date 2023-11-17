// Task 1

let submit = document.getElementById("submit");
var divCont = document.getElementById("cont");
divCont.style.display = "none";

submit.addEventListener("click", function () {
  let Yname = document.getElementById("name").value;
  let Yage = document.getElementById("age").value;
  let description = document.getElementById("description").value;
  let genderY = document.querySelector('input[name="gender"]:checked');
  let major = document.getElementById("major").value;

  let languages = document.querySelectorAll('input[name="languages"]:checked');
  let selectedLanguages = Array.from(languages).map(
    (checkbox) => checkbox.value
  );

  let obj = {
    name: Yname,
    age: Yage,
    gender: genderY ? genderY.value : "", // extract the value from the element
    description: description,
    majorAndUniversity: major,
    programmingLanguages: selectedLanguages,
  };
  localStorage.setItem("obj", JSON.stringify(obj));
  console.log(obj);
});

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");

if (localStorage.getItem("obj")) {
  let objP = JSON.parse(localStorage.getItem("obj"));

  p1.textContent = objP.name;
  p2.textContent = objP.age;
  p3.textContent = objP.gender;
  p4.textContent = objP.description;
  p5.textContent = objP.majorAndUniversity;
  p6.textContent = objP.programmingLanguages;
  divCont.style.display = "block";
}

// Task 2

// let submit = document.getElementById("submit");
// var divCont = document.getElementById("cont");
// divCont.style.display="none"

//         submit.addEventListener("click", function () {
//             let Yname = document.getElementById("name").value;
//             let Yage = document.getElementById("age").value;
//             let description = document.getElementById("description").value;
//             let genderY = document.querySelector('input[name="gender"]:checked');
//             let major = document.getElementById("major").value;

//             let languages = document.querySelectorAll('input[name="languages"]:checked');
//             let selectedLanguages = Array.from(languages).map(checkbox => checkbox.value);

//             let obj = {
//                 name: Yname,
//                 age: Yage,
//                 gender: genderY ? genderY.value : '', // extract the value from the element
//                 description: description,
//                 majorAndUniversity: major,
//                 programmingLanguages: selectedLanguages,
//             };
//             sessionStorage.setItem("obj", JSON.stringify(obj));
//             console.log(obj);

//         });

//         let p1 = document.getElementById("p1");
//         let p2 = document.getElementById("p2");
//         let p3 = document.getElementById("p3");
//         let p4 = document.getElementById("p4");
//         let p5 = document.getElementById("p5");
//         let p6 = document.getElementById("p6");

//         if (sessionStorage.getItem("obj")) {
//             let objP = JSON.parse(sessionStorage.getItem("obj"));

//             p1.textContent = objP.name;
//             p2.textContent = objP.age;
//             p3.textContent=objP.gender;
//             p4.textContent=objP.description;
//             p5.textContent=objP.majorAndUniversity;
//             p6.textContent=objP.programmingLanguages
//             divCont.style.display="block"

//         }
