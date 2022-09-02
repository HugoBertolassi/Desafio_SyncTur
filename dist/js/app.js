import { PacoteController } from "./controller/pacote-controller.js";
const pacoteController = new PacoteController();
const btn_cadastrar = document.querySelector("#btn_cadastrar");
const btn_editar = document.querySelector("#btn_editar");
export function AtualizarEventListenerCards(miliseconds) {
    setTimeout(() => {
        var _a, _b;
        let tamanho;
        let tamanhoNodeList = document.querySelectorAll(".editar");
        tamanho = tamanhoNodeList;
        for (let i = 0; i < tamanho.length; i++) {
            let id = tamanho[i].getAttribute("value");
            let seletor = "#editar" + id.toString();
            (_a = document.querySelector(seletor)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                pacoteController.editar(1, seletor);
            });
            let seletor1 = "#excluir" + id.toString();
            (_b = document.querySelector(seletor1)) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
                pacoteController.excluir(seletor1);
            });
        }
    }, miliseconds);
}
window.onload = () => {
    pacoteController.importaDados();
    AtualizarEventListenerCards(3000);
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
