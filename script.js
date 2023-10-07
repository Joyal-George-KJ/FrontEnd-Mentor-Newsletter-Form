const wrapper = document.querySelector(".wrapper");
const thanksPage = document.querySelector(".thanks-page");
const errorMsg = document.querySelector(".label p");


function ValidateEmail() {
    const input = document.getElementById('email');
    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {
        errorMsg.className = 'display-none'
        input.className = '';
        submitted('open');
    } else {
        errorMsg.className = '';
        input.className = 'error';
    }
}

function submitted(func) {
  console.log(wrapper.className + ":" + thanksPage.className);
  if (func === "open") {
    wrapper.className = "wrapper display-none ";
    thanksPage.className = " thanks-page ";
  } else if (func === "close") {
    thanksPage.className = "thanks-page display-none ";
    wrapper.className = " wrapper ";
  } else {
    console.log('Something went wrong!: submitted(func)');
  }
}
