// Form blur event listener
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('hkid').addEventListener('blur', validateHKID);

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    const regex = /^[a-zA-Z]{2,16}$/;
    if(!regex.test(name.value)) {
        name.classList.add("is-invalid")
    } else {
        name.classList.remove("is-invalid");
    }
}

function validateHKID() {
    const zip = document.getElementById('hkid');
    // Accept form: A1234567 ; AB1234567 ; A1234567(0) ; AB1234567(0)
    const regex = /^([A-Za-z]{1})?[A-Za-z]{1}\d{6}\(?\d{1}\)?$/
    if(!regex.test(zip.value)) {
        zip.classList.add("is-invalid")
    } else {
        zip.classList.remove("is-invalid");
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([A-Za-z]{2,5})$/;
    if(!regex.test(email.value)) {
        email.classList.add("is-invalid")
    } else {
        email.classList.remove("is-invalid");
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    // Acceptable form: 85212345678 ; +(852)12345678 ; +(852) 12345678 ; 12345678; 1234 5678
    const regex = /^[+]?\(?([852]{3})?\)?[-. ]?\d{4}[-. ]?\d{4}$/;
    if(!regex.test(phone.value)) {
        phone.classList.add("is-invalid")
    } else {
        phone.classList.remove("is-invalid");
    }
}