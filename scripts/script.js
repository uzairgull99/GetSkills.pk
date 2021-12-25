

// -----------------For side bar---------------------

function toggleNav() {
    document.querySelector(".nav-tag").classList.toggle("nav-open");
    document.querySelector(".heading").classList.toggle("position-change");
    document.querySelector("footer").classList.toggle("footer-class");
    document.querySelector(".video-header").classList.toggle("new-video-header");
    document.querySelector(".video").classList.toggle("new-video");
}


// --------------------- Section END------------------



// -----------When click on video it will be bold (For video marking)----------

document.querySelector(".check").addEventListener("click", () => {
    document.querySelector(".check").classList.add("myClass");
});
document.querySelector(".check-1").addEventListener("click", () => {
    document.querySelector(".check-1").classList.add("myClass");
});
document.querySelector(".check-2").addEventListener("click", () => {
    document.querySelector(".check-2").classList.add("myClass");
});
document.querySelector(".check-3").addEventListener("click", () => {
    document.querySelector(".check-3").classList.add("myClass");
});
document.querySelector(".check-4").addEventListener("click", () => {
    document.querySelector(".check-4").classList.add("myClass");
});
document.querySelector(".check-5").addEventListener("click", () => {
    document.querySelector(".check-5").classList.add("myClass");
});
document.querySelector(".check-6").addEventListener("click", () => {
    document.querySelector(".check-6").classList.add("myClass");
});
document.querySelector(".check-7").addEventListener("click", () => {
    document.querySelector(".check-7").classList.add("myClass");
});
document.querySelector(".check-8").addEventListener("click", () => {
    document.querySelector(".check-8").classList.add("myClass");
});
document.querySelector(".check-9").addEventListener("click", () => {
    document.querySelector(".check-9").classList.add("myClass");
});

// ------------------------------ Section END---------------------------------





// function myfun() {
//     document.querySelector(".check").setAttribute("class", "myClass");
// }
// --------------for video marking end--------------------------




function signUp() {
    let email_sign_up = document.getElementById("emailSignUp").value;
    let password_sign_up = document.getElementById("passwordSignUp").value;

    if (email_sign_up == "" && password_sign_up == "") {
        alert("Please enter email or password to continue");
    }
    else {
        localStorage.setItem("emailSignUp", email_sign_up);
        localStorage.setItem("password_sign_up", password_sign_up);

        alert("Sign Up Successfull.")
    }
    window.location.href = "signedUp_success.html";
    // window.location.href = "Sign_In.html";
}


function login() {
    let signup_value_email = localStorage.getItem("emailSignUp")
    let signup_value_password = localStorage.getItem("password_sign_up")

    let email_signin = document.getElementById("emailLogin").value;
    let password_signin = document.getElementById("passwordLogin").value;

    if (email_signin == "" && password_signin == "") {
        alert("Please enter email and password");
    }
    else {
        if (signup_value_email == email_signin && signup_value_password == password_signin) {
            alert("Logged In Successfully");
            window.location.href = "../Inner_Interface/LMSHome.html";
        }
        else {
            alert("Login Failed.")
        }
    }

}


function log_out() {
    let check = confirm("Are you sure you want to logout.");

    if (check) {
        window.location.href = "../Home_main.html";

    }
    else {
        console.log("Canceled");
    }


}








// function check() {
//     let email_sign_up = document.querySelector(".getemail").value;
//     alert(email_sign_up);
// }

// function fun_2() {

//     if (email_signin == email_sign_up) {
//         document.querySelector(".sign_in").href = "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault";

//     } else {
//         document.querySelector(".sign_in").href = "./";
//     }
// }
























// function fun_1() {
//     document.querySelector(".icons").classList.toggle("nav-open");
// }

// function fun() {
//     document.querySelector(".log-out").textContent = "Home";
// }
