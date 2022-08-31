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
                <h2>${pacote.id}-${pacote.nome}</h2>
                <p>${pacote.descricao}</p>
                <p>Data de viagem:${this.dataTexto(pacote.data)}</p>
                <div class="cards-card-botoes">
                    <button class="editar" id="editar${pacote.id}" value="${pacote.id}">Editar</button>
                    <button class="excluir" id="excluir${pacote.id}" value="${pacote.id}">Excluir</button>
                </div>
            </div>
            
        `
        }).join();
    }

    public update(model:Pacotes):void{
        this.elemento.innerHTML=this.template(model);
        
    }

    protected dataTexto(data:Date):string{
        let dataString:string;
        dataString=(data.getDate().toString()+"/"
                +data.getMonth().toString()+"/"
                +data.getFullYear().toString()
                )
        return dataString
    }
}