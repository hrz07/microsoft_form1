const body = document.querySelector("body");
const form_container = document.querySelector(".form_container");
const top_heading_input = document.querySelector(".top_heading_input");
const header_container = document.querySelector(".header_container");
const input_container = document.querySelector(".input_container");
const header = document.querySelector(".header");
const header_des = document.querySelector(".header_des");
const addButton = document.querySelector(".addButton");
const buttons = document.querySelector(".buttons button");
const input1 = document.querySelector(".input1");
const btnGroup = document.querySelector(".btnGroup");
const plus = document.querySelector(".plus");
// const body = document.getElementsByTagName('body');
const header_input = document
  .getElementById("header_input")
  .getElementsByTagName("input");

let headingToggler = false;
let btnToggler = false;

body.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target == body) {
    document.querySelector(".header_container").classList.add("displayNone");
    document.querySelector(".input_container").classList.remove("displayNone");
  } else {
    document.querySelector(".header_container").classList.remove("displayNone");
    document.querySelector(".input_container").classList.add("displayNone");
  }
});

top_heading_input.addEventListener("click", (e) => {
  e.stopPropagation();

  if (
    e.targe == body ||
    (e.target !== header_input[1] &&
      e.target !== header_input[0] &&
      e.target !== header_container &&
      e.target !== header_des &&
      e.target !== addButton &&
      e.target !== input_container)
  ) {
    headingToggler = true;

    if (headingToggler) {
      document.querySelector(".header_container").classList.add("displayNone");
      document
        .querySelector(".input_container")
        .classList.remove("displayNone");
    } else {
      document
        .querySelector(".header_container")
        .classList.remove("displayNone");
      document.querySelector(".input_container").classList.add("displayNone");
    }
  }
});

top_heading_input.addEventListener("blur", (e) => {
  console.log(e);
});

header_input[0].addEventListener("change", (e) => {
  e.stopPropagation();
  header.innerText = e.target.value;
});
header_input[1].addEventListener("change", (e) => {
  e.stopPropagation();
  header_des.innerText = e.target.value;
});





// add button section
btnGroup.style.display='none';


addButton.addEventListener('click',()=>{
    btnGroup.style.display='flex';
    addButton.style.display='none';
})

plus.addEventListener('click',()=>{
    btnGroup.style.display='none';
    addButton.style.display='flex';
})


