import { Pacote } from "./pacote.js";

//Classe para armazenar a lista de pacotes
export class Pacotes{
    private pacotes:Pacote[]=[]
    
    public adicionar(pacote:Pacote){
        this.pacotes.push(pacote);
    }
    
     //Exclui o pacote apartir do seletor #Excluir do HTML 
    public excluir(seletor:string,mensagem:boolean):void{
        let a=seletor.slice(8)//tratamento da string para retornar o id
        let i:number=0;
        this.pacotes.map((data,index)=>{
            if(data.id==a){
                 i=index;
            }  
        })
        this.pacotes.splice(i,1)//pega o indice de referencia, apaga
        if(mensagem==true){alert(`Pacote ${this.pacotes[i].nome} excluido com sucesso`)}
    }

    //seleciona o pacote apartir do seletor #Editar do HTML 
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

    //retorna o ultimo ID +1 da lista de pacotes
    public lastID():string{
        let maiorId=Number(this.pacotes[0].id);
        this.pacotes.map((data,index)=>{
            if(Number(data.id)>maiorId){
                maiorId=Number(data.id);
            }  
        })
        maiorId++//Retorna o ultimo id mais 1
        let maiorIdString=(maiorId).toString()
        //console.log("O maior ID é:  "+ maiorId)
        return maiorIdString; 
    }
}