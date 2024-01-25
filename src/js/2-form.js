const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector("[name='email']");
const messageRef = document.querySelector("[name='message']");

formRef.addEventListener("input", onFormInput);

function onFormInput() {
    const userData = {
        email: emailRef.value.trim(),
        message: messageRef.value.trim(),
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

if (localStorage.length) {
    const userDataStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
    emailRef.value = userDataStorage.email;
    messageRef.value = userDataStorage.message;
};

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (emailRef.value && messageRef.value) {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
    emailRef.value = "";
    messageRef.value = "";
    } else {
        alert("All form fields must be filled in");
    }
}