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
    public editar(seletor:string):void{
        let a=seletor.slice(7)

        console.log(a)
    }
    
    public excluir(seletor:string):void{
        let a=seletor.slice(8)//tratamento da string para retornar o id
        let b=parseInt(a)//tranformacao do id em number
        let i:number=0;
        this.pacotes.map((data,index)=>{
            if(data.id==b){
                 i=index;
            }  
        })
        this.pacotes.splice(i,1)//pega o indice de referencia, apaga
    }

    //lista os objetos pacote
    public lista():ReadonlyArray<Pacote>{
        return [...this.pacotes]
    }
}