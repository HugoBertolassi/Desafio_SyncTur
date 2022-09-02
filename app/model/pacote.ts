export class Pacote {
    constructor(
        public nome: string,
        public descricao: string,
        private _data: Date,
        public status: boolean,
        public id: string
    ) { }
    
    //Cria um data temporaria que bloqueia a uyilizacao dos metodos Date na data do pacote
    get data(): Date {
        const data = new Date(this._data.getTime());//Cria uma variavel que recebe o valor, e se apessoa tentar modificar não vai achar a vairavel
        return data;
    }

    //Metodo que permite criar o objeto Pacote
    public static criar(nomeString: string, descricaoString: string, dataString: string, statusString: boolean,idString:string): Pacote {
        const exp = /-/g;//expressao regular
        const date = new Date(dataString.replace(exp, ','));

       
    
        const _id = idString;
        //console.log(`Nao esquecer de configurar o ID`)
        
        const pacote = new Pacote(
            nomeString,
            descricaoString,
            date,
           // _status3,
            statusString,
            _id
        )
        return pacote;

    }

    //metodo de tratamento do radio button ativo e inativo

}