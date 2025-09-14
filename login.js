const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "TECHYKULDEEP" && password === "Jangid123@") {
        window.location="https://techy-kuldeep-tv.vercel.app/TechyKuldeep.html";
       
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
