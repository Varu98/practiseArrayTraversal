const btn = document.querySelector(".btn");
const nameClass = document.querySelectorAll(".nameClass");
const ageClass = document.querySelectorAll(".ageClass");
const yugaClass = document.querySelectorAll(".yugaClass");

const person = [
  { name: "Ram", yuga: "Treata", age: 21 },
  { name: "Krishna", yuga: "Dwapar", age: 31 }
];

const printValue = () => {
  // for (let i = 0; i < person.length; i++) {
  //   name = person[i].name;
  //   age = person[i].age;
  //   yuga = person[i].yuga;

  for (let i = 0; i < nameClass.length; i++) {
    nameClass[i].innerHTML = person[i].name;

    ageClass[i].innerHTML = person[i].age;

    yugaClass[i].innerHTML = person[i].yuga;
  }
  // }
};

btn.addEventListener("click", printValue);
