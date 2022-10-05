function SignUpButtonClicked() {
    //var username = document.getElementById("username");
    //var pass = document.getElementById("password");
    //console.log(username.value, pass.value);
    var username = document.getElementById("FullName");
    var mail = document.getElementById("Email");
    var pass = document.getElementById("Password");
    var password = document.getElementById("CheckPassword");
    var birthday = document.getElementById("Birth");


    if (!username?.value) {
        var errorP = document.getElementById("forFullName");
        errorP.innerHTML = "Please Enter the Full Name"
    }
    else {
        var errorP = document.getElementById("forFullName");
        errorP.innerHTML = ""
    }

    if (!mail?.value) {
        var errorP = document.getElementById("forEmailId");
        errorP.innerHTML = "Please Enter your Email id"
    }
    else {
        var errorP = document.getElementById("forEmailId");
        errorP.innerHTML = ""
    }

    if (!birthday?.value) {
        var errorP = document.getElementById("forBirthDay");
        errorP.innerHTML = "Please Enter birthday value."
    }
    else {
        var errorP = document.getElementById("forBirthDay");
        errorP.innerHTML = ""
    }

    if (!birthday?.value) {
        var errorP = document.getElementById("forBirthDay");
        errorP.innerHTML = "Please Enter birthday value."
    }
    else {
        var errorP = document.getElementById("forBirthDay");
        errorP.innerHTML = ""
    }

    if (!pass?.value) {
        var errorP = document.getElementById("forPass");
        errorP.innerHTML = "Please Enter password."
    }
    else {
        var errorP = document.getElementById("forPass");
        errorP.innerHTML = ""
    }

    if (!password?.value) {
        var errorP = document.getElementById("forPass2");
        errorP.innerHTML = "Please Enter password."
    }
    else {
        var errorP = document.getElementById("forPass2");
        errorP.innerHTML = ""
    }




    console.log(username.value, mail.value, pass.value, password.value);
}


function showPass() {
    console.log("Showw Clicked");
    var pass = document.getElementById("Password");
    if (pass?.type === "text") {
        console.log("Text==>");
        pass?.setAttribute("type", "password");
    }
    else {
        console.log("Pass==>");
        pass?.setAttribute("type", "text");
    }
}



function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.form1.pass.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form1.pass.focus();
        return false;
    }
}



function validation() {
    let x = document.forms["FullName"]["uname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}