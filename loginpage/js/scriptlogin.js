const passBtn = document.querySelector('#lock-btn');
const inputEmail = document.querySelector('#exampleInputEmail1');
const inputPsw = document.querySelector('#exampleInputPassword1');

passBtn.onclick = () => {
    if (inputPsw.type === "password") {
        inputPsw.type = "text";
        passBtn.innerHTML = "<i class='fa-solid fa-lock'></i>";

    } else {
        inputPsw.type = "password";
        passBtn.innerHTML = "<i class='fa-solid fa-lock-open'></i>";

    }
}

// ====================ALERT===================

const user = {
    email: "admin@test",
    password: "admin123"
}

const form = document.querySelector('form');
const closeBtn = document.querySelector('.close-btn');
const alertElem = document.querySelector('.alert');
const alertText = document.querySelector('.alert-txt');


form.onsubmit = (e) => {
    e.preventDefault();

    if (!inputEmail.value || !inputPsw.value) {
        alertElem.className = "alert error";
        alertElem.style.display = "flex";
        alertText.getElementsByTagName('h3')[0].innerHTML = "Error";
        alertText.getElementsByTagName('p')[0].innerHTML = "Your email address is invalid";

    } else {
        if (inputEmail.value === user.email && inputPsw.value === user.password) {
            alertElem.className = "alert success";
            alertElem.style.display = "flex";
            alertText.getElementsByTagName('h3')[0].innerHTML = "Success";
            alertText.getElementsByTagName('p')[0].innerHTML = "Your account has been saved";

        } else {
            alertElem.className = "alert error";
            alertElem.style.display = "flex";
            alertText.getElementsByTagName('h3')[0].innerHTML = "Error";
            alertText.getElementsByTagName('p')[0].innerHTML = "Your email address is invalid";
        }
    }
}

closeBtn.onclick = () => {
    if (alertElem.style.display === "flex") {
        alertElem.style.display = "none";
    } else {
        alertElem.style.display = "flex";
    }
}