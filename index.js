const form = document.querySelector("#form");
const email = document.getElementById("email");
const errorIcon = document.getElementById("card-error-icon");
const errorMsg = document.getElementById("error-msg");
const submitBtn = document.getElementById("submit")

errorMsg.style.visibility = "hidden";
errorIcon.style.visibility = "hidden";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (email.value.match(submitBtn)) {
        form.reset();
    } else {
        errorMsg.style.visibility = "visible";
        errorIcon.style.visibility = "visible";
    }
});

email.addEventListener("input", () => {
    errorMsg.style.visibility = "hidden";
    errorMsg.style.border = "0px 10px 20px red";
    errorIcon.style.visibility = "hidden";
});
