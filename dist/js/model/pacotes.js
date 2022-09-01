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
        let a = seletor.slice(8);
        let b = parseInt(a);
        let i = 0;
        this.pacotes.map((data, index) => {
            if (data.id == b) {
                i = index;
            }
        });
        this.pacotes.splice(i, 1);
    }
    lista() {
        return [...this.pacotes];
    }
}
