import { Pacote } from "./pacote.js";

//lista de pacotes
export class Pacotes{
    //private botaoEditar:HTMLButtonElement//NodeList
    private pacotes:Pacote[]=[]
    /*constructor(){
        this.botaoEditar=document.querySelector("#editar1") as HTMLButtonElement
    }*/

    public adicionar(pacote:Pacote){
        this.pacotes.push(pacote);
    }
    public editar(seletor:string,pacote:Pacote):void{
        this.pacotes.push(pacote);

    }

    public excluir(seletor:string):void{
        let a=seletor.slice(8)//tratamento da string para retornar o id
        let i:number=0;
        this.pacotes.map((data,index)=>{
            if(data.id==a){
                 i=index;
            }  
        })
        this.pacotes.splice(i,1)//pega o indice de referencia, apaga
    }

    public selecionar(seletor:string):Pacote{
        let a=seletor.slice(7)//tratamento da string para retornar o id
        let i:number=0;
        this.pacotes.map((data,index)=>{
            if(data.id==a){
                 i=index;
            }  
        })
        //console.log(i)
        return this.pacotes[i];
    }

    //lista os objetos pacote
    public lista():ReadonlyArray<Pacote>{
        return [...this.pacotes]
    }

    public lastID():string{
        let maiorId=Number(this.pacotes[0].id);
        this.pacotes.map((data,index)=>{
            if(Number(data.id)>maiorId){
                maiorId=Number(data.id);
            }  
        })
        maiorId++
        let maiorIdString=(maiorId).toString()
        //console.log("O maior ID é:  "+ maiorId)
        return maiorIdString; 
    }
}