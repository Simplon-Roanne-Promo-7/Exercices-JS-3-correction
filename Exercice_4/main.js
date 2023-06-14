let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");


function validatePassword() {

    if (password.value != confirmPassword.value) {
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
    } else {
        password.style.border = "2px solid green";
        confirmPassword.style.border = "2px solid green";
    }
}