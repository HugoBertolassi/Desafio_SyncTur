import { Pacote } from "../model/pacote.js";
export class PacoteService {
    constructor() {
        this.api = "https://62361b7feb166c26eb2f488a.mockapi.io/pacotes";
    }
    obterPacotes() {
        return fetch(this.api)
            .then(response => response.json())
            .then((dados) => {
            return dados.map((pacoteApi) => {
                let data = new Date(pacoteApi.data);
                return new Pacote(pacoteApi.nome, pacoteApi.descricao, data, pacoteApi.status, pacoteApi.id);
            });
        });
    }
}
