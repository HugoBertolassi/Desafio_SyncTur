import { PacoteController } from "./controller/pacote-controller.js";
const pacoteController = new PacoteController();
const btn_cadastrar = document.querySelector("#btn_cadastrar");
window.onload = () => pacoteController.importaDados();
if (btn_cadastrar) {
    btn_cadastrar.addEventListener('click', event => {
        event.preventDefault();
        pacoteController.adiciona();
    });
}
else {
    throw Error('Nao foi encontrado o botao cadastrar');
}
