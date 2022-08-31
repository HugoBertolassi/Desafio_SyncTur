export class PacotesView {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        this.elemento = elemento;
    }
    template(model) {
        return model.lista().map(pacote => {
            return `
            <div class="cards-card">
                <h2>${pacote.id}-${pacote.nome}</h2>
                <p>${pacote.descricao}</p>
                <p>Data de viagem:${this.dataTexto(pacote.data)}</p>
                <div class="cards-card-botoes">
                    <button class="editar">Editar</button>
                    <button class="excluir">Excluir</button>
                </div>
            </div>
        `;
        }).join();
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
