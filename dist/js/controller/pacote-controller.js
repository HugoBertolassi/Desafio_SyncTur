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
        this.inputStatusAtivo = document.querySelector('#status_pacote_ativo');
        this.inputStatusInativo = document.querySelector('#status_pacote_inativo');
        this.inputData = document.querySelector("#input-data-viagem");
        this.inputDescricaoPacote = document.querySelector("#txt_descricao_pacote");
        this.inputID = document.querySelector("#input_ID");
        this.btnEditar = document.querySelector("#btn_editar2");
        this.btnEditar.addEventListener('click', () => {
            this.btnEditar.style.display = "none";
            this.btnCadastrar.style.display = "block";
            this.editar(2, "#editar" + this.inputID.value);
        });
        this.btnCadastrar = document.querySelector("#btn_cadastrar");
    }
    adiciona(retorna) {
        if (this.inputID.value == "0") {
            this.inputID.value = this.pacotes.lastID();
        }
        let dataAtual = new Date();
        let dataInput = new Date(this.inputData.value);
        if (dataInput < dataAtual) {
            this.inputData.focus();
            return alert("Data menor que a atual, favor checar");
        }
        if (!this.inputData.value) {
            this.inputData.focus();
            return alert("Data invalida");
        }
        if (!this.inputPacote.value) {
            this.inputPacote.focus();
            return alert("Nome do pacote Invalido");
        }
        const pacote = Pacote.criar(this.inputPacote.value, this.inputDescricaoPacote.value, this.inputData.value, this.inputStatus, this.inputID.value);
        this.pacotes.adicionar(pacote);
        AtualizarEventListenerCards(1000);
        this.pacotesView.update(this.pacotes);
        this.limparCamposInputs();
        if (retorna) {
            return true;
        }
    }
    selecionar(seletor) {
        const pacote = this.pacotes.selecionar(seletor);
        return (pacote);
    }
    editar(etapa, seletor) {
        if (etapa == 1 && seletor) {
            const pacote = this.pacotes.selecionar(seletor);
            this.inputPacote.value = pacote.nome;
            this.inputDescricaoPacote.value = pacote.descricao;
            this.inputData.value = this.dataTexto(pacote.data);
            this.inputID.value = pacote.id.toString();
            this.injecaoRadioButtonStatus(pacote);
            window.scrollTo(0, 0);
            this.btnCadastrar.style.display = "none";
            this.btnEditar.style.display = "block";
        }
        else if (etapa == 2) {
            if (this.adiciona(true)) {
                this.excluir(seletor, false);
                alert(`Pacote editado com sucesso`);
            }
        }
        else {
            throw Error("MEtodo em editar nao encontrado");
        }
        AtualizarEventListenerCards(100);
        this.pacotesView.update(this.pacotes);
    }
    excluir(seletor, mensagem) {
        if (!mensagem) {
            mensagem = false;
        }
        this.pacotes.excluir(seletor, mensagem);
        AtualizarEventListenerCards(1000);
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
    dataTexto(data) {
        let dataString;
        let mes = (data.getMonth() < 9 ? "0" + (data.getMonth() + 1).toString() : (data.getMonth() + 1).toString());
        let dia = (data.getDate() < 10 ? "0" + data.getDate().toString() : data.getDate().toString());
        dataString = (data.getFullYear().toString() + "-"
            + mes + "-"
            + dia);
        return dataString;
    }
    limparCamposInputs() {
        this.inputPacote.value = "";
        this.inputDescricaoPacote.value = "";
        this.inputData.value = "";
        this.inputID.value = "0";
        console.log("limparCamposInputs:criar codigo do status");
    }
    injecaoRadioButtonStatus(pacote, tratamentoInjecaodireta) {
        if (pacote.status == true) {
            this.inputStatusAtivo.checked = true;
        }
        else if (pacote.status == false) {
            this.inputStatusInativo.checked = true;
        }
        else
            (console.log("Status do botao nao encontrado"));
    }
}
