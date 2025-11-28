const form = document.querySelector("#registerForm");
const message = document.querySelector("#message");

form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.name;
    const email = form.email;
    const password = form.password;

    let isValid = true;

    //Återställa styling
    [name, email, password].forEach(input => {
        input.classList.remove("error", "success");
        input.setAttribute("aria-invalid", "false");
    });

    //När tomt fält --> error
    if (!name.value.trim()) {
        name.classList.add("error");
        name.setAttribute("aria-invalid", "true");
        isValid = false;
    } else {
        name.classList.add("success")
    }

    if (!email.value.trim()) {
        email.classList.add("error");
        email.setAttribute("aria-invalid", "true");
        isValid = false;
    } else {
        email.classList.add("success")
    }

    if (!password.value.trim()) {
        password.classList.add("error");
        password.setAttribute("aria-invalid", "true");
        isValid = false;
    } else {
        password.classList.add("success")
    }

    //Meddelanden
    if (!isValid) {
        message.textContent = "Alla fält måste fyllas i!";
    } else {
        message.textContent = "Tack för registreringen!";
    }
});