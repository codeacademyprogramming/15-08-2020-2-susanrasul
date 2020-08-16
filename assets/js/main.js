let user = document.getElementById("username");
let usErr = document.querySelector('label[for="username"]');
let phone = document.getElementById("phone");
let numErr = document.querySelector('label[for="phone"]');
let mail = document.getElementById("email");
let mailErr = document.querySelector('label[for="email"]');
let textD = document.querySelector(".text-danger");
let textS = document.querySelector(".text-success");
let numPattern = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{2})[-.]?([0-9]{2})$/;
let ePattern = /\S+@\S+\.\S+/;


document.querySelector(".btn").addEventListener("click", () => {
    if (user.value !== "" && phone.value !== "" && mail.value !== "") {
        if (user.value !== "") {
            if (phone.value !== "") {
                if (mail.value !== "") {
                    if (user.value.length > 3) {
                        if (phone.value.match(numPattern)) {
                            if (mail.value.match(ePattern)) {
                                textS.innerText = "Welcome";
                                usErr.classList.remove("effects");
                                numErr.classList.remove("effects");
                                mailErr.classList.remove("effects");
                                textD.innerText = "";
                            } else {
                                mailError.classlistadd("effects")
                                textS.innerText = "";
                                textD.innerText = "Please write correct email version"
                            }
                        } else {
                            numErr.classList.add("effects");
                            textS.innerText = "";
                            textD.innerText = "Phone number is not correct version"
                        }
                    } else {
                        usErr.classList.add("effects")
                        textS.innerText = "";
                        textD.innerText = "Username length is very low";
                    }
                } else {
                    mailErr.classList.add("effects")
                    usErr.classList.remove("effects");
                    numErr.classList.add("effects");
                    textS.innerText = "";
                    textD.innerText = "Please add mail"
                }
            } else {
                textS.innerText = "";
                textD.innerText = "Please add phone"
                mailErr.classList.add("effects")
                usErr.classList.remove("effects");
                numErr.classList.add("effects");
            }
        } else {
            mailErr.classList.add("effects")
            usErr.classList.remove("effects");
            numErr.classList.add("effects");
            textS.innerText = "";
            textD.innerText = "Please add username"
        }
    } else {
        mailErr.classList.add("effects")
        usErr.classList.remove("effects");
        numErr.classList.add("effects");
        textS.innerText = "";
        textD.innerText = "Please fill every area"
    }
})






// document.querySelector(".btn").addEventListener("click", () => {

//     if (user.value.length == "") {
//         usErr.classList.remove("effects");
//         numErr.classList.remove("effects");
//         mailErr.classList.remove("effects");
//         textS.innerText = "";
//         textD.innerText = "Please add username"
//     }
//     else if (user.value.length < 2) {
//         textS.innerText = "";
//         usErr.classList.remove("effects");
//         numErr.classList.remove("effects");
//         mailErr.classList.remove("effects");
//         textD.innerText = "Username length is very low";
//     }
//     else {
//         usErr.classList.add("effects")
//         textS.innerText = "Welcome";

//     }


//     if (phone.value == "") {
//         textS.innerText = "";
//         usErr.classList.remove("effects");
//         numErr.classList.remove("effects");
//         mailErr.classList.remove("effects");
//         textD.innerText = "Please add phone number";
//     }
//     else if (phone.value.match(pattern)) {
//         textS.innerText = "";
//         usErr.classList.remove("effects");
//         numErr.classList.remove("effects");
//         mailErr.classList.remove("effects");
//         textD.innerText = "Phone number is not correct version";
//     }
//     else {
//         numErr.classList.add("effects");
//         textS.innerText = "Welcome";
//     }


//     if (mail.value == "") {
//         textS.innerText = "";
//         usErr.classList.remove("effects");
//         numErr.classList.remove("effects");
//         mailErr.classList.remove("effects");
//         textD.innerText = "Please add email address";
//     }
//     else if (mail.value.match(ePattern)) {
//         textS.innerText = "Email address is not correct version";
//         usErr.classList.remove("effects");
//         numErr.classList.remove("effects");
//         mailErr.classList.remove("effects");
//         textD.innerText = "";
//     }
//     else {
//         mailErr.classList.add("effects");
//         textS.innerText = "Welcome";
//     }
// })