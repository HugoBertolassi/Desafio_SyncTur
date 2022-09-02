export class Pacotes {
    constructor() {
        this.pacotes = [];
    }
    adicionar(pacote) {
        this.pacotes.push(pacote);
    }
    excluir(seletor, mensagem) {
        let a = seletor.slice(8);
        let i = 0;
        this.pacotes.map((data, index) => {
            if (data.id == a) {
                i = index;
            }
        });
        this.pacotes.splice(i, 1);
        if (mensagem == true) {
            alert(`Pacote ${this.pacotes[i].nome} excluido com sucesso`);
        }
    }
    selecionar(seletor) {
        let a = seletor.slice(7);
        let i = 0;
        this.pacotes.map((data, index) => {
            if (data.id == a) {
                i = index;
            }
        });
        return this.pacotes[i];
    }
    lista() {
        return [...this.pacotes];
    }
    lastID() {
        let maiorId = Number(this.pacotes[0].id);
        this.pacotes.map((data, index) => {
            if (Number(data.id) > maiorId) {
                maiorId = Number(data.id);
            }
        });
        maiorId++;
        let maiorIdString = (maiorId).toString();
        return maiorIdString;
    }
}
