import { AtualizarEventListenerCards } from "../app.js";
import { Pacote } from "../model/pacote.js";
import { Pacotes } from "../model/pacotes.js";
import { PacoteService } from "../service/pacote-service.js";
import { PacotesView } from "../view/pacotes-view.js";
export class PacoteController {
    constructor() {
        this.pacotes = new Pacotes();
        this.pacotesView = new PacotesView("#cards");
        this.pacoteService = new PacoteService();
        this.inputPacote = document.querySelector("#nome_pacote");
        this.inputStatus = document.querySelectorAll('input[name="status_pacote"]');
        this.inputData = document.querySelector("#input-data-viagem");
        this.inputDescricaoPacote = document.querySelector("#txt_descricao_pacote");
    }
    adiciona() {
        const pacote = Pacote.criar(this.inputPacote.value, this.inputDescricaoPacote.value, this.inputData.value, this.inputStatus);
        this.pacotes.adicionar(pacote);
        console.log(this.pacotes.lista());
        AtualizarEventListenerCards();
        this.pacotesView.update(this.pacotes);
    }
    editar(seletor) {
        this.pacotes.editar(seletor);
        AtualizarEventListenerCards();
        this.pacotesView.update(this.pacotes);
    }
    excluir(seletor) {
        console.log(this.pacotes.lista());
        this.pacotes.excluir(seletor);
        AtualizarEventListenerCards();
        this.pacotesView.update(this.pacotes);
    }
    importaDados() {
        this.pacoteService.obterPacotes()
            .then(pacotesApi => {
            for (let pacote of pacotesApi) {
                this.pacotes.adicionar(pacote);
            }
            this.pacotesView.update(this.pacotes);
        });
    }
}
