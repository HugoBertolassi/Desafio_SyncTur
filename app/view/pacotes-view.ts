import { Pacotes } from "../model/pacotes.js";

export class PacotesView{
    private elemento:HTMLElement;
    constructor(seletor:string){
        const elemento=document.querySelector(seletor)
        this.elemento=elemento as HTMLElement;
    }

    protected template(model:Pacotes):string{
      return `
            ${model.lista().map(pacote=>{
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
        }).join()}`
    }

    public update(model:Pacotes):void{
        this.elemento.innerHTML=this.template(model);
        
    }

    protected dataTexto(data:Date):string{
        let dataString:string;
        //tratamento de numero com 1 digito
        let mes=(data.getMonth()<9 ? "0"+(data.getMonth()+1).toString():(data.getMonth()+1).toString())//tratamento do texto mes <q 10
        let dia=(data.getDate()<10 ? "0"+data.getDate().toString():data.getDate().toString())//tratamento do texto dia < q 10
        
        dataString=(dia+"/"
                +mes+"/"
                +data.getFullYear()
                )
        return dataString
    }
}