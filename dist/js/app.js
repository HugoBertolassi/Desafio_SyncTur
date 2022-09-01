import { PacoteController } from "./controller/pacote-controller.js";
const pacoteController = new PacoteController();
const btn_cadastrar = document.querySelector("#btn_cadastrar");
const btn_editar = document.querySelector("#btn_editar");
export function AtualizarEventListenerCards() {
    console.log("funcao olar");
    console.log();
    setTimeout(() => {
        var _a, _b;
        let tamanho = document.querySelectorAll(".editar");
        for (let i = 0; i < tamanho.length; i++) {
            let seletor = "#editar" + i.toString();
            (_a = document.querySelector(seletor)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                pacoteController.editar(seletor);
            });
            let seletor1 = "#excluir" + i.toString();
            (_b = document.querySelector(seletor1)) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
                pacoteController.excluir(seletor1);
            });
        }
    }, 3000);
}
window.onload = () => {
    pacoteController.importaDados();
    AtualizarEventListenerCards();
};
if (btn_cadastrar) {
    btn_cadastrar.addEventListener('click', event => {
        event.preventDefault();
        pacoteController.adiciona();
    });
}
else {
    throw Error('Nao foi encontrado o botao cadastrar');
}
