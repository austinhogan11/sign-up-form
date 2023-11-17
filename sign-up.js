
var button = document.querySelector("#create-btn");
var pwc = document.querySelector("#user_password_confirmed");
var change_border = function () {
    var pw = document.querySelector("#user_password");
    var pwc = document.querySelector("#user_password_confirmed");
    var pw_value = pw.value;
    var pwc_value = pwc.value;
    if (pwc_value !== null && pwc_value !== pw_value) {
        pw.style.border = "3px solid red";
        pwc.style.border = "3px solid red";
    }
}

pwc.addEventListener("change", change_border);