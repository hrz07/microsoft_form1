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
let choice_result = document.querySelector("#choice_result");
const choice_ques_input = document.querySelector("#choice_ques_input");
const choice_opton1_input = document.querySelector("#choice_opton1_input");
const choice_opton2_input = document.querySelector("#choice_opton2_input");
const choice_output_ques = document.querySelector("#choice_output_ques");
const choice_output_option1 = document.querySelector("#choice_output_option1");
const choice_output_option2 = document.querySelector("#choice_output_option2");
const choice = document.querySelector(".choice");

// display section
text_output_form.style.display = "none";
// const body = document.getElementsByTagName('body');
const header_input = document
  .getElementById("header_input")
  .getElementsByTagName("input");

let headingToggler = false;
let btnToggler = false;
let sideBtnsShow = false;

// style
const choice_output_Resultcontainer = ` {
  width: 785px;
  min-height: 200px;
  margin: 20px auto;
  border-radius: 2px;
  padding: 10px;
  transition: all .6s ease;
}
`;

const choice_input_temp = {
  ques: "",
  option1: "",
  option2: "",
  status: false,
};

const text_input_temp = {
  ques: "ques1",
  option1: "op1",
  status: false,
};

let choice_output_list = [];
const text_output_list = [];

const dataDelete = (i) => {
  let parent = document.querySelector("choice_result");
  let child = document.querySelector(`#choice${i}`);
  child.remove();
  let rest = choice_output_list.filter((data, index) => {
    return i !== index;
  });

  choice_output_list = [...rest];
};

const cpy = (i) => {
  let copyEle = document.querySelector(`.inpu${i}`);
  copyEle.focus();
  copyEle.select();
  let sc = document.execCommand("copy");
  if (sc) {
    alert("copied text");
  }
};

const choiceAddOption = ()=>{
  console.log("ok");
}


document.querySelector("#choice_output_container").style.display = "none";
const showContent = (index) => {
  if (typeof index === "number" && index >= 0) {
    choice_output_list[index].status = false;
  }
  choice_output_list.forEach((data, i) => {
    let check = document.getElementById(`choice${i}`);

    document.getElementById(`choice${i}`).innerHTML = "";

    if (data?.status) {
      document.getElementById(`choice${i}`).innerHTML = `
          <div id="choice_output_container" class="choice_output_container">
          <div class="choice_output">
            <div class="ques_name">
              <p id="choice_output_ques">${i + 1}. ${data.ques}</p>
            </div>

            <div class="radio-box">
              <div class="radio-option">
                <input type="radio" />
                <p id="choice_output_option1">${data.option1}</p>
              </div>
              <div class="radio-option">
                <input type="radio" />
                <p id="choice_output_option2">${data.option2}</p>
              </div>
            </div>
          </div>
        </div>
          `;
    } else {
      const div = document.createElement("div");
      div.classList.add("choice_form");
      div.innerHTML = `
          <div class="btn_group">
            <div class="btns">
            <button onClick="cpy(${i})">
                <span class="material-symbols-outlined js-textareacopybtn"> content_copy </span>
              </button>
              <button>
                <span class="material-symbols-outlined" onClick="dataDelete(${i})"> delete </span>
              </button>
              <button>
                <span class="material-symbols-outlined"> south </span>
              </button>
              <button>
                <span class="material-symbols-outlined"> north </span>
              </button>
            </div>
          </div>
          <div class="choice_form_input">
       <input class="${i} inpu${i}" id="choice_ques_input"  type="text" value="${data.ques}" placeholder="Question" />
          </div>
          <div class="options">
            <div class="option_boxx">
              <input type="radio" />
              <input
                id="choice_opton1_input"
                type="text"
                placeholder="Option1"
                value="${data.option1}"
                class="${i} op1${i}"
              />
            </div>
            <div class="option_boxx">
              <input type="radio" />
              <input
                id="choice_opton2_input"
                type="text"
                placeholder="Option2"
                value="${data.option2}"
                class="${i} op2${i}"
              />
            </div>
          </div>
         
          <div class="optionContainer">
            <div class="optionbox">
              <button onClick="choiceAddOption()">
                <span class="material-symbols-outlined">add</span> Add option
              </button>
         
              <button>Add "Other" option</button>
            </div>
          </div>
         
          <hr />
         
          <div class="toggleContainer">
            <div class="toggleBox">
              <button>
                <span class="material-symbols-outlined"> toggle_off </span>
                Multiple answers
              </button>
              <button>
                <span class="material-symbols-outlined"> toggle_off </span>
                Required
              </button>
              <button>
                <span class="material-symbols-outlined"> more_horiz </span>
              </button>
            </div>
          </div>`;

      document.getElementById(`choice${i}`).appendChild(div);

      const choice_ques_input = document.querySelector(`.inpu${i}`);
      choice_ques_input.addEventListener("input", (e) => {
        const index = Number(e.target.classList[0]);
        choice_output_list[index].ques = e.target.value;
      });

      const choice_option_input = document.querySelector(`.op1${i}`);
      choice_option_input.addEventListener("input", (e) => {
        const index = Number(e.target.classList[0]);
        choice_output_list[index].option1 = e.target.value;
      });

      const choice_option2_input = document.querySelector(`.op2${i}`);
      choice_option2_input.addEventListener("input", (e) => {
        const index = Number(e.target.classList[0]);
        choice_output_list[index].option2 = e.target.value;
      });
    }
  });
};

body.addEventListener("click", (e) => {
  e.stopPropagation();

  for (let i = 0; i < choice_output_list.length; i++) {
    choice_output_list[i].status = true;
  }

  showContent();

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

// <------------------choice button----------------------->

choice_button.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();

  choice_output_list.push({ ...choice_input_temp });

  const index = choice_output_list.length - 1;

  const div = document.createElement("div");
  div.id = `choice${index}`;
  div.classList.add(`${index}`);

  div.addEventListener("click", (e) => {
    e.stopPropagation();

    const parent = e.target.closest(".choice_output_container");
    const index = Number(e.currentTarget.classList[0]);

    if (parent) {
      showContent(index);
    }
  });

  div.innerHTML += ` <div class="choice_form">
 <div class="btn_group">
   <div class="btns">
     <button onClick="cpy(${index})">
       <span class="material-symbols-outlined js-textareacopybtn"> content_copy </span>
     </button>
     <button>
       <span class="material-symbols-outlined"  onClick="dataDelete(${index})" > delete </span>
     </button>
     <button>
       <span class="material-symbols-outlined"> south </span>
     </button>
     <button>
       <span class="material-symbols-outlined"> north </span>
     </button>
   </div>
 </div>
 <div class="choice_form_input">
   <input class="${index} inpu${index}" id="choice_ques_input"  type="text" value="${choice_output_list[index].ques}" placeholder="Question" />
 </div>
 <div class="options">
   <div class="option_boxx">
     <input type="radio" />
     <input
       id="choice_opton1_input"
       type="text"
       placeholder="Option1"
       value="${choice_output_list[index].option1}"
       class="${index} op1${index}"
     />
   </div>
   <div class="option_boxx">
     <input type="radio" />
     <input
       id="choice_opton2_input"
       type="text"
       placeholder="Option2"
       value="${choice_output_list[index].option2}"
       class="${index} op2${index}"
     />
   </div>
 </div>

 <div class="optionContainer">
   <div class="optionbox">
     <button onClick="choiceAddOption()">
       <span class="material-symbols-outlined">add</span> Add option
     </button>

     <button>Add "Other" option</button>
   </div>
 </div>

 <hr />

 <div class="toggleContainer">
   <div class="toggleBox">
     <button>
       <span class="material-symbols-outlined"> toggle_off </span>
       Multiple answers
     </button>
     <button>
       <span class="material-symbols-outlined"> toggle_off </span>
       Required
     </button>
     <button>
       <span class="material-symbols-outlined"> more_horiz </span>
     </button>
   </div>
 </div>
</div>`;

  choice_result.appendChild(div);

  const choice_ques_input = document.querySelector(`.inpu${index}`);
  choice_ques_input.addEventListener("input", (e) => {
    const index = Number(e.target.classList[0]);
    choice_output_list[index].ques = e.target.value;
  });

  const choice_option_input = document.querySelector(`.op1${index}`);
  choice_option_input.addEventListener("input", (e) => {
    const index = Number(e.target.classList[0]);
    choice_output_list[index].option1 = e.target.value;
  });

  const choice_option2_input = document.querySelector(`.op2${index}`);
  choice_option2_input.addEventListener("input", (e) => {
    const index = Number(e.target.classList[0]);
    choice_output_list[index].option2 = e.target.value;
  });
});

// <------------------text button---------------------->

// text_btn.addEventListener("click", (e) => {
//   e.stopPropagation();

//   btnGroup.style.display = "none";
//   addButton.style.display = "flex";

//   if ((choice_form.style.display = "none")) {
//     choice_output_container.style.display = "none";
//   }

//   if ((choice_form.style.display = "block")) {
//     choice_output_container.style.display = "block";
//     choice_form.style.display = "none";
//   }

//   text_form.style.display = "block";

//   body.addEventListener("click", (e) => {
//     e.stopPropagation();

//     if (e.target == body) {
//       text_form.style.display = "none";
//       text_output_form.style.display = "block";
//     }
//   });
// });

// text_form.addEventListener("click", (e) => {
//   e.stopPropagation();

//   text_form.style.display = "none";
//   text_output_form.style.display = "block";
// });

// text_output_form.addEventListener("click", (e) => {
//   e.stopPropagation();

//   text_form.style.display = "block";
//   text_output_form.style.display = "none";
// });

text_btn.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();

  text_output_list.push({ ...text_input_temp });

  const index = text_output_list.length - 1;

  const div = document.createElement("div");
  div.id = `choice${index}`;
  div.classList.add(`${index}`);

  div.addEventListener("click", (e) => {
    e.stopPropagation();

    const parent = e.target.closest(".choice_output_container");
    const index = Number(e.currentTarget.classList[0]);
    console.log(parent);
    console.log(index);

    if (parent) {
      showContent(index);
    }
  });

  div.innerHTML += ` <div  class="choice_form">
 <div class="btn_group">
   <div class="btns">
     <button>
       <span class="material-symbols-outlined"> content_copy </span>
     </button>
     <button>
       <span class="material-symbols-outlined"> delete </span>
     </button>
     <button>
       <span class="material-symbols-outlined"> south </span>
     </button>
     <button>
       <span class="material-symbols-outlined"> north </span>
     </button>
   </div>
 </div>
 <div class="choice_form_input">
   <input class="${index} inpu${index}" id="choice_ques_input"  type="text" value="${choice_output_list[index].ques}" placeholder="Question" />
 </div>
 <div class="options">
   <div class="option_boxx">
     <input type="radio" />
     <input
       id="choice_opton1_input"
       type="text"
       placeholder="Option1"
       value="${choice_output_list[index].option1}"
       class="${index} op1${index}"
     />
   </div>
   <div class="option_boxx">
     <input type="radio" />
     <input
       id="choice_opton2_input"
       type="text"
       placeholder="Option2"
       value="${choice_output_list[index].option2}"
       class="${index} op2${index}"
     />
   </div>
 </div>

 <div class="optionContainer">
   <div class="optionbox">
     <button>
       <span class="material-symbols-outlined">add</span> Add option
     </button>

     <button>Add "Other" option</button>
   </div>
 </div>

 <hr />

 <div class="toggleContainer">
   <div class="toggleBox">
     <button>
       <span class="material-symbols-outlined"> toggle_off </span>
       Multiple answers
     </button>
     <button>
       <span class="material-symbols-outlined"> toggle_off </span>
       Required
     </button>
     <button>
       <span class="material-symbols-outlined"> more_horiz </span>
     </button>
   </div>
 </div>
</div>`;

  choice_result.appendChild(div);

  const choice_ques_input = document.querySelector(`.inpu${index}`);
  choice_ques_input.addEventListener("input", (e) => {
    const index = Number(e.target.classList[0]);
    choice_output_list[index].ques = e.target.value;
  });

  const choice_option_input = document.querySelector(`.op1${index}`);
  choice_option_input.addEventListener("input", (e) => {
    const index = Number(e.target.classList[0]);
    choice_output_list[index].option1 = e.target.value;
  });

  const choice_option2_input = document.querySelector(`.op2${index}`);
  choice_option2_input.addEventListener("input", (e) => {
    const index = Number(e.target.classList[0]);
    choice_output_list[index].option2 = e.target.value;
  });
});

rating_btn.addEventListener("click", (e) => {
  e.stopPropagation();

  btnGroup.style.display = "none";
  addButton.style.display = "flex";

  rating_input.style.display = "block";

  body.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target == body) {
      rating_input.style.display = "none";
      rating_input.style.display = "block";
    }
  });
});

rating_input.addEventListener("click", (e) => {
  e.stopPropagation();

  rating_input.style.display = "none";
  rating_output.style.display = "block";
});
rating_output.addEventListener("click", (e) => {
  e.stopPropagation();

  rating_input.style.display = "block";
  rating_output.style.display = "none";
});

date_btn.addEventListener("click", (e) => {
  e.stopPropagation();

  btnGroup.style.display = "none";
  addButton.style.display = "flex";

  date_input.style.display = "block";

  body.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target == body) {
      date_input.style.display = "none";
      date_output.style.display = "block";
    }
  });
});

date_input.addEventListener("click", (e) => {
  e.stopPropagation();

  date_input.style.display = "none";
  date_output.style.display = "block";
});
date_output.addEventListener("click", (e) => {
  e.stopPropagation();

  date_input.style.display = "block";
  date_output.style.display = "none";
});
