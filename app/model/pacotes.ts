import { Pacote } from "./pacote.js";

//lista de pacotes
export class Pacotes{
    private pacotes:Pacote[]=[]

    public adicionar(pacote:Pacote){
        this.pacotes.push(pacote);
    }

    //lista os objetos pacote
    public lista():ReadonlyArray<Pacote>{
        return [...this.pacotes]
    }
}