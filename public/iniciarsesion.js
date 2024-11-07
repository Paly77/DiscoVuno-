/* Validacion para modulo eventos
function validateLoginForm() {
    const email = document.forms["loginForm"]["email"].value;
    const password = document.forms["loginForm"]["password"].value;

    if (!email || !password) {
        alert("Por favor, completa todos los campos.");
        return false; // Evita el envío del formulario
    }
    return true; // Permite el envío si la validación es correcta
}
*/

//Modulo Eventos
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.forms["loginForm"];
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Verificar que todos los campos están completos
        if (!email || !password) {
            Swal.fire({
                icon: "warning",
                title: "Campos incompletos",
                text: "Debe completar todos los campos",
            });
            return;
        }

        // Verificar longitud de la contraseña
        if (password.length < 6) {
            document.getElementById("passwordMessage").style.display = "block";
        } else {
            // Aquí puedes proceder con el envío si todo está bien
            loginForm.submit();
        }
    });

    // Escucha para esconder el mensaje de contraseña corta al modificar el input
    passwordInput.addEventListener("input", function () {
        const passwordMessage = document.getElementById("passwordMessage");
        if (passwordInput.value.length >= 6) {
            passwordMessage.style.display = "none";
        } else {
            passwordMessage.style.display = "block";
        }
    });
});
