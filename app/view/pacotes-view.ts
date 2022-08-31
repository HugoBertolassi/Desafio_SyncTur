import { Pacotes } from "../model/pacotes.js";

export class PacotesView{
    private elemento:HTMLElement;
    constructor(seletor:string){
        const elemento=document.querySelector(seletor)
        this.elemento=elemento as HTMLElement;
    }

    protected template(model:Pacotes):string{
      return  model.lista().map(pacote=>{
            return`
            <div class="cards-card">
                <h2>${pacote.nome}</h2>
                <p>${pacote.nome}</p>
                <p>Data de viagem:${pacote.data}</p>
                <div class="cards-card-botoes">
                    <button id="editar">Editar</button>
                    <button id="excluir">Excluir</button>
                </div>
            </div>
        `
        }).join();
    }

    public update(model:Pacotes):void{
        this.elemento.innerHTML=this.template(model);
        
    }
}