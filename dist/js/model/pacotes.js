export class Pacotes {
    constructor() {
        this.pacotes = [];
    }
    adicionar(pacote) {
        this.pacotes.push(pacote);
    }
    editar(seletor) {
        let a = seletor.slice(7);
        console.log(a);
    }
    excluir(seletor) {
        console.log(seletor);
        let a = seletor.slice(8);
        let b = parseInt(a) - 1;
        console.log(this.pacotes);
        this.pacotes.splice(b, 1);
    }
    lista() {
        return [...this.pacotes];
    }
}
