const formRef = document.querySelector(".feedback-form");
const emailRef = formRef.elements['email'];
const messageRef = formRef.elements['message'];

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
    if (userDataStorage.hasOwnProperty("email") && userDataStorage.hasOwnProperty("message")) {
            emailRef.value = userDataStorage.email;
            messageRef.value = userDataStorage.message;
    }

}

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (emailRef.value && messageRef.value) {
    console.log({
        email: emailRef.value.trim(),
        message: messageRef.value.trim(),
    });
    localStorage.removeItem("feedback-form-state");
    emailRef.value = "";
    messageRef.value = "";
    } else {
        alert("All form fields must be filled in");
    }
}