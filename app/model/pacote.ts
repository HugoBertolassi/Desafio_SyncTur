export class Pacote {
    constructor(
        public nome: string,
        public descricao: string,
        private _data: Date,
        public status: boolean,
        public id: number
    ) { }

    get data(): Date {
        const data = new Date(this._data.getTime());//Cria uma variavel que recebe o valor, e se apessoa tentar modificar não vai achar a vairavel
        return data;
    }

    //public static criar(nomeString:any,descricaoString:any,dataString:any,statusString:any):Pacote{
    public static criar(nomeString: string, descricaoString: string, dataString: string, statusString: any): Pacote {
        const exp = /-/g;//expressao regular
        const date = new Date(dataString.replace(exp, ','));

        //tratamento de dado radio button
        let _status1: string
        let _status3: boolean = false;
        for (let i = 0; i < statusString.length; i++) {
            
            if (statusString[i].checked===true) {
                _status1 = statusString[i].value;
                //console.log(`status1 ` + _status1)

                if (_status1 == "ativo") {
                    _status3 = true;
                }
                else {
                    _status3 = false;
                }
                //console.log(_status3)
            }
        }

        const _id = 0;
        console.log(`Nao esquecer de configurar o ID`)
        const pacote = new Pacote(
            nomeString,
            descricaoString,
            date,
            _status3,
            //statusString,
            _id
        )
        return pacote;

    }
}