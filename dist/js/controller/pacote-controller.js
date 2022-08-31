import { Pacote } from "../model/pacote.js";
import { Pacotes } from "../model/pacotes.js";
import { PacotesView } from "../view/pacotes-view.js";
export class PacoteController {
    constructor() {
        this.pacotes = new Pacotes();
        this.pacotesView = new PacotesView("#cards");
        this.inputPacote = document.querySelector("#nome_pacote");
        this.inputStatus = document.querySelectorAll('input[name="status_pacote"]');
        this.inputData = document.querySelector("#input-data-viagem");
        this.inputDescricaoPacote = document.querySelector("#txt_descricao_pacote");
    }
    adiciona() {
        const pacote = Pacote.criar(this.inputPacote.value, this.inputDescricaoPacote.value, this.inputData.value, this.inputStatus);
        console.log(pacote);
        this.pacotes.adicionar(pacote);
        console.log(this.pacotes.lista());
        this.pacotesView.update(this.pacotes);
    }
}
