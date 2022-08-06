function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// main contianer
document.getElementById('hourlyRate').style.display = 'none'


function handleChange(src) {
    if (src.value == 'hiring') {
        document.getElementById('hourlyRate').style.display = 'inherit'
    }
    if (src.value == 'question') {
        document.getElementById('hourlyRate').style.display = 'none'
    }
    if (src.value == 'comment') {
        document.getElementById('hourlyRate').style.display = 'none'
    }
}
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let address = document.forms["contactForm"]["address"].value;
    let city = document.forms["contactForm"]["city"].value;
    let reason = document.forms["contactForm"]["reason"].value;
    let message = document.forms["contactForm"]["message"].value;
    let hourlyRate = document.forms["contactForm"]["hourlyRate"].value;
    if (name == "") {
        document.getElementById('name').innerHTML = "Name must be filled out";
        return false
    } else {
        document.getElementById('name').innerHTML = "";
    }
    if (email == "") {
        document.getElementById('email').innerHTML = "Email must be filled out.";
        return false
    } else {
        document.getElementById('email').innerHTML = "";
    }
    if (address == "") {
        document.getElementById('address').innerHTML = "Please provide your address.";
        return false
    } else {
        document.getElementById('address').innerHTML = "";
    }

    if (city == "") {
        document.getElementById('city').innerHTML = "Please Enter your City.";
        return false
    } else {
        document.getElementById('city').innerHTML = "";
    }
    if (reason == "") {
        document.getElementById('reason').innerHTML = "Please Select One from below.";
        return false
    } else {
        if (reason == 'hiring') {
            if (hourlyRate == "") {
                document.getElementById('hourlyRate2').innerHTML = "Please Enter rate.";
                return false
            } else {
                document.getElementById('hourlyRate2').innerHTML = "";
            }
        }
        else {
            document.getElementById('reason').innerHTML = "";
        }
    }

    if (message == "") {
        document.getElementById('message').innerHTML = "Please Select One from below.";
        return false
    } else {
        document.getElementById('message').innerHTML = "";
    }

}


function changeValidate(src) {
    alert(src.value)
}