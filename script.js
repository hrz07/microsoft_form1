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
const side_btn_parent = document.querySelector(".side_btn_parent");
const side_buttons = document.querySelector(".side_buttons");
const choice_button = document.querySelector("#choice_button");
const choice_form = document.querySelector("#choice_form");
const choice_output_container = document.querySelector(
  "#choice_output_container"
);
const text_btn = document.querySelector("#text_btn");
const text_form = document.querySelector("#text_form");
const text_output_form = document.querySelector("#text_output_form");
const rating_input = document.querySelector("#rating_input");
const rating_output = document.querySelector("#rating_output");
const rating_btn = document.querySelector("#rating_btn");
const date_btn = document.querySelector("#date_btn");
const date_input = document.querySelector("#date_input");
const date_output = document.querySelector("#date_output");

// display section



// const body = document.getElementsByTagName('body');
const header_input = document
  .getElementById("header_input")
  .getElementsByTagName("input");

let headingToggler = false;
let btnToggler = false;
let sideBtnsShow = false;

body.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target == body) {
    document.querySelector(".header_container").classList.add("displayNone");
    document.querySelector(".input_container").classList.remove("displayNone");

    // choice_form.style.display='none';
    // choice_output_container.style.display='block';
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
btnGroup.style.display = "none";

addButton.addEventListener("click", (e) => {
  e.stopPropagation();

  btnGroup.style.display = "flex";
  addButton.style.display = "none";
});

plus.addEventListener("click", (e) => {
  e.stopPropagation();

  btnGroup.style.display = "none";
  addButton.style.display = "flex";
});

side_btn_parent.addEventListener("click", (e) => {
  e.stopPropagation();

  sideBtnsShow = !sideBtnsShow;

  if (sideBtnsShow) {
    side_buttons.style.display = "block";
  } else {
    side_buttons.style.display = "none";
  }
});



choice_button.addEventListener('click',(e)=>{
  e.stopPropagation();

  btnGroup.style.display = "none";
  addButton.style.display = "flex";

  choice_form.style.display='block';

  body.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target == body) {
      choice_form.style.display = "none";
      choice_output_container.style.display = "block";
    }
  });
})

choice_form.addEventListener('click',(e)=>{
  e.stopPropagation();

  choice_form.style.display='none';
  choice_output_container.style.display='block';
})

choice_output_container.addEventListener('click',(e)=>{
  e.stopPropagation();

  choice_form.style.display='block';
  choice_output_container.style.display='none';
})





text_btn.addEventListener("click", (e) => {
  e.stopPropagation();

  btnGroup.style.display = "none";
  addButton.style.display = "flex";


  if ((choice_form.style.display = "none")) {
    choice_output_container.style.display = "none";
  }

  if ((choice_form.style.display = "block")) {
    choice_output_container.style.display = "block";
    choice_form.style.display = "none";
  }

  text_form.style.display = "block";

  body.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target == body) {
      text_form.style.display = "none";
      text_output_form.style.display = "block";
    }
  });
});



text_form.addEventListener("click", (e) => {
  e.stopPropagation();

  text_form.style.display = "none";
  text_output_form.style.display = "block";
});

text_output_form.addEventListener("click", (e) => {
  e.stopPropagation();

  text_form.style.display = "block";
  text_output_form.style.display = "none";
});



rating_btn.addEventListener('click',(e)=>{
  e.stopPropagation();

  btnGroup.style.display = "none";
  addButton.style.display = "flex";

  rating_input.style.display= 'block';

  body.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target == body) {
      rating_input.style.display = "none";
      rating_input.style.display = "block";
    }
  });
})

rating_input.addEventListener('click',(e)=>{
  e.stopPropagation();

  rating_input.style.display='none';
  rating_output.style.display='block';

})
rating_output.addEventListener('click',(e)=>{
  e.stopPropagation();

  rating_input.style.display='block';
  rating_output.style.display='none';
})



date_btn.addEventListener('click',(e)=>{
  e.stopPropagation();

  btnGroup.style.display = "none";
  addButton.style.display = "flex";

  date_input.style.display='block';


  body.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target == body) {
      date_input.style.display = "none";
      date_output.style.display = "block";
    }
  });
})


date_input.addEventListener('click',(e)=>{
  e.stopPropagation();

  date_input.style.display='none';
  date_output.style.display='block'
})
date_output.addEventListener('click',(e)=>{
  e.stopPropagation();

  date_input.style.display='block';
  date_output.style.display='none'
})

