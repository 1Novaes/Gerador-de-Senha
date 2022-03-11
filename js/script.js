let slider = document.querySelector("#slider")
let sizePassword = document.querySelector("#size-password")
let buttonGenerator = document.querySelector("#button-generator")

let password = document.querySelector("#password")
let passwordContainer = document.querySelector(".password-container")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789-@"
let novaSenha = ""


sizePassword.innerHTML = slider.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {

    let pass = "";
    for (let i = 0, n = charset.length; i < slider.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    passwordContainer.classList.remove("hidden")
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {

    alert("Senha copiada")
    navigator.clipboard.writeText(novaSenha);

}