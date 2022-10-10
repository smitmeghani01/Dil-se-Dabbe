const loginBtn = document.getElementById('loginBtn');
const regBtn = document.getElementById('registerBtn');
const switchBtn = document.getElementById('btn');
const loginDiv = document.getElementById('loginForm');
const regDiv = document.getElementById('registerForm');

regBtn.addEventListener('click',() => {
  loginDiv.style.left="-400px";
  regDiv.style.left="50px";
  switchBtn.style.left="110px";
})

loginBtn.addEventListener('click',() => {
    console.log("daba")
    loginDiv.style.left = "50px";
    regDiv.style.left = "450px";
    switchBtn.style.left = "0px";
})

