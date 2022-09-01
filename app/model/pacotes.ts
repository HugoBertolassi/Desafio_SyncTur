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
        console.log(seletor)
        let a=seletor.slice(8)
        let b=parseInt(a)-1
        console.log(this.pacotes)
        this.pacotes.splice(b,1)//pega o indice de referencia, apaga
        //console.log(this.pacotes)
        //alert(`Item excluido com sucesso`)
    }

    //lista os objetos pacote
    public lista():ReadonlyArray<Pacote>{
        return [...this.pacotes]
    }
}