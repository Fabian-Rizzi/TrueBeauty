const splashi = document.querySelector('.splashscreen');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splashi.classList.add('display-none');
    }, 1000);
})

function passwordToggle() {
    let campo = document.getElementsByClassName("logInPasswordInput");
    if (campo[0].type == "text") {
        campo[0].type = "password";
    } else {
    campo[0].type = "text";
    }
}

const logBtn = document.getElementById("logBtn");
logBtn.addEventListener('click', function logBtnFn() {
    logBtn.style.transition = "all 0.1s ease-in-out"
    logBtn.style.backgroundColor = "#A6739D";  
    setTimeout(() => {
        logBtn.style.backgroundColor = "#E2B0DA";  
      }, 100);

      setTimeout(() => {
        let emailInput = document.getElementsByClassName("logInEmailInput");
      let passwordInput = document.getElementsByClassName("logInPasswordInput")
      if (emailInput[0].value === "lena92@gmail.com" && passwordInput[0].value === "lena92") {
          console.log("access grantes");
          window.location.href = 'home.html';
          
      } else {
          console.log("access denied");
      }
      }, 800)
});

var innerScreenHeight = window.innerHeight;
document.getElementById("homeTabBar").style.top = innerScreenHeight + "755px";

let homeSearch = document.getElementById("homeSearchInput");

// homeSearch.addEventListener('focusin', function hideNavBar() {
//    document.getElementById("homeTabBar").addClass('hide-footer');
//    console.log("asd");
// }); 
    
// homeSearch.onfocus = (ev) => {
//    document.getElementById("homeTabBar").addClass('hide-footer');
//    console.log("asd");
// };
