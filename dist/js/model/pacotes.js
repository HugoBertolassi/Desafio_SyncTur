export class Pacotes {
    constructor() {
        this.pacotes = [];
        this.botaoEditar = document.querySelector("#editar1");
    }
    adicionar(pacote) {
        this.pacotes.push(pacote);
    }
    editar(id) {
        console.log('editar metodo');
    }
    lista() {
        return [...this.pacotes];
    }
}
