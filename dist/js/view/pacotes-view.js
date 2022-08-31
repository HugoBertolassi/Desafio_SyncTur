export class PacotesView {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        this.elemento = elemento;
    }
    template(model) {
        return model.lista().map(pacote => {
            return `
            <div class="cards-card">
                <h2>${pacote.nome}</h2>
                <p>${pacote.nome}</p>
                <p>Data de viagem:${pacote.data}</p>
                <div class="cards-card-botoes">
                    <button id="editar">Editar</button>
                    <button id="excluir">Excluir</button>
                </div>
            </div>
        `;
        }).join();
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
