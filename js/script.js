let slider = document.querySelector("#slider")
let sizePassword = document.querySelector("#size-password")
let buttonGenerator = document.querySelector("#button-generator")

let password = document.querySelector("#password")
let passwordContainer = document.querySelector(".password-container")

let tipo = document.querySelector("#tipo");


// Tipo de Senha

let charset = ""

function tipoSenha() {
    if (tipo.value == 1) {
        charset = "123456789";
    } else if (tipo.value == 2) {
        charset = "abcdefghijklmnopqrstuvwxyz"
    } else if (tipo.value == 3) {
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } else if (tipo.value == 4) {
        charset = "abcdefghijklmnopqrstuvwxyz123456789"
    } else if (tipo.value == 5) {
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
    } else if (tipo.value == 6) {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    return charset;
}



let novaSenha = ""

// Pega o valor do range e mostra na tela

sizePassword.innerHTML = slider.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}



function generatePassword() {
    tipoSenha();
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

buttonGenerator.addEventListener("click", generatePassword);
passwordContainer.addEventListener("click", copyPassword);