export class PacotesView {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        this.elemento = elemento;
    }
    template(model) {
        return `
      <script>
      import { olar } from "./click.js";
      alert("hello world")  
      olar()</script>
            ${model.lista().map(pacote => {
            return `
            <div class="cards-card">
                <h2>${pacote.id}-${pacote.nome}</h2>
                <p>${pacote.descricao}</p>
                <p>Data de viagem:${this.dataTexto(pacote.data)}</p>
                <div class="cards-card-botoes">
                    <button class="editar" id="editar${pacote.id}" value="${pacote.id}">Editar</button>
                    <button class="excluir" id="excluir${pacote.id}" value="${pacote.id}">Excluir</button>
                </div>
            </div>
            
        `;
        }).join()}`;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    dataTexto(data) {
        let dataString;
        dataString = (data.getDate().toString() + "/"
            + data.getMonth().toString() + "/"
            + data.getFullYear().toString());
        return dataString;
    }
}
