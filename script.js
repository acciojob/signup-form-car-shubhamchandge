//your code here
let nameinput = document.getElementById("name");
let emailinput = document.getElementById("email");
let ageinput = document.getElementById("age");
let dobinput = document.getElementById("dob");
let passinput = document.getElementById("password");
let button = document.getElementById("btn");

let gender = document.getElementsByName("gender");


let validate = () => {

    if (nameinput.value == "") {
        document.querySelector(".name-error").style.visibility = "visible";
    } else {
        document.querySelector('.name-error').style.visibility = "hidden";
    }

    if (emailinput.value == "") {
        document.querySelector('.email-error').style.visibility = "visible";
    } else {
        document.querySelector('.email-error').style.visibility = "hidden";
    }


    if (ageinput.value == "") {
        document.querySelector('.age-error').style.visibility = "visible";
    } else {
        document.querySelector('.age-error').style.visibility = "hidden";
    }

    if (dobinput.value == "") {
        document.querySelector('.dob-error').style.visibility = "visible";
    } else {
        document.querySelector('.dob-error').style.visibility = "hidden";
    }


    if (passinput.value == "") {
        document.querySelector('.pass-error').style.visibility = "visible";
    } else {
        document.querySelector('.pass-error').style.visibility = "hidden";
    }

    var errortxt = "";
    var radios = document.getElementsByName('gender');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked = false) {
            errortxt = "";
        } else {
            errortxt = "! Gender field should not be Empty";
        }
    }
    document.getElementById("gender-error").innerHTML = "<p>" + errortxt + "</p>";

}