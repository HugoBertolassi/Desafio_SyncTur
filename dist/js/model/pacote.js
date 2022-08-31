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
    static criar(nomeString, descricaoString, dataString, statusString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        let _status1;
        let _status3 = false;
        for (let i = 0; i < statusString.length; i++) {
            if (statusString[i].checked === true) {
                _status1 = statusString[i].value;
                if (_status1 == "ativo") {
                    _status3 = true;
                }
                else {
                    _status3 = false;
                }
            }
        }
        const _id = 0;
        console.log(`Nao esquecer de configurar o ID`);
        const pacote = new Pacote(nomeString, descricaoString, date, _status3, _id);
        return pacote;
    }
}
