const viewBtn2 = document.querySelector(".viewBtn2");
const container = document.querySelector(".container");

viewBtn2.addEventListener('click',()=>{
    location.href= './index.html'
  })

let choice_output_list = JSON.parse(localStorage.getItem('all_outputs'));


choice_output_list?.map((data,i)=>{

  let dt =`
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
        </div>`

        container.innerHTML += dt;

})