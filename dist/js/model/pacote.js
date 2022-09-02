export class Pacote {
    constructor(nome, descricao, _data, status, id) {
        this.nome = nome;
        this.descricao = descricao;
        this._data = _data;
        this.status = status;
        this.id = id;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criar(nomeString, descricaoString, dataString, statusString, idString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const _id = idString;
        const pacote = new Pacote(nomeString, descricaoString, date, statusString, _id);
        return pacote;
    }
}
