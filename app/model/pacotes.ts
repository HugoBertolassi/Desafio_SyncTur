import { Pacote } from "./pacote.js";

//lista de pacotes
export class Pacotes{
    private botaoEditar:HTMLButtonElement//NodeList
    private pacotes:Pacote[]=[]
    constructor(){
        this.botaoEditar=document.querySelector("#editar1") as HTMLButtonElement
    }

    public adicionar(pacote:Pacote){
        this.pacotes.push(pacote);
    }
    public editar(id:string):void{
        console.log('editar metodo')
    }

    //lista os objetos pacote
    public lista():ReadonlyArray<Pacote>{
        return [...this.pacotes]
    }
}