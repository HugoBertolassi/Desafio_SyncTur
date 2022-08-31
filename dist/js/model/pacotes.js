export class Pacotes {
    constructor() {
        this.pacotes = [];
    }
    adicionar(pacote) {
        this.pacotes.push(pacote);
    }
    lista() {
        return [...this.pacotes];
    }
}
