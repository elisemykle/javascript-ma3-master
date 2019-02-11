//Use RegEx to validate form

// Min kode av oppgaven

/*function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
document.getElementById('name').style.borderColor = "red";
    return false;
  }
}*/

// hjelp av Robin
var fname = document.getElementById("Fname");
var lname = document.getElementById("Lname");
var telephone = document.getElementById("Telephone");
var email = document.getElementById("Email");

function validateInput() {

    if (fname.value.trim() == "") {
        alert("One or more names have not been entered")
        fname.focus();
        return false;
    }
    if (lname.value.trim() == "") {
        alert("One or more names have not been entered")
        lname.focus();
        return false;
    }
}

function validateEmail() {

    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) {
        console.log("This email is valid")
        return true;
    } else {
        console.log("This is not a valid email address")
    }
}

function validatePhone() {

    if (/\d{9,12}/.test(telephone.value)) {
        console.log("This phone number is valid")
        return true;
    } else {
        console.log("This is not a valid phone number")
    }
}
