export class PacotesView {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        this.elemento = elemento;
    }
    template(model) {
        return `
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
        let mes = (data.getMonth() < 10 ? "0" + (data.getMonth() + 1).toString() : (data.getMonth() + 1).toString());
        let dia = (data.getDate() < 10 ? "0" + data.getDate().toString() : data.getDate().toString());
        dataString = (dia + "/"
            + mes + "/"
            + data.getFullYear());
        return dataString;
    }
}
