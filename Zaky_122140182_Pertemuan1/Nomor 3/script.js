document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        let result = validateForm(name, email, password);
        let errorContainer = document.getElementById("errorMessages");
        errorContainer.innerHTML = "";

        if (!result.valid) {
            result.messages.forEach(msg => {
                let p = document.createElement("p");
                p.textContent = msg;
                p.style.color = "red";
                errorContainer.appendChild(p);
            });
        } else {
            let successMsg = document.createElement("p");
            successMsg.textContent = "Pendaftaran berhasil!";
            successMsg.style.color = "green";
            errorContainer.appendChild(successMsg);
        }
    });
});

function validateForm(name, email, password) {
    let errors = [];

    if (name.length <= 3) {
        errors.push("Nama harus lebih dari 3 karakter.");
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Email tidak valid.");
    }

    if (password.length < 8) {
        errors.push("Password harus minimal 8 karakter.");
    }

    return errors.length > 0 ? { valid: false, messages: errors } : { valid: true, messages: ["Form berhasil divalidasi."] };
}