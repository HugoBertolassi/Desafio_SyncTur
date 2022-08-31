import { Pacote } from "../model/pacote.js";
import { Pacotes } from "../model/pacotes.js";
import { PacoteService } from "../service/pacote-service.js";
import { PacotesView } from "../view/pacotes-view.js";


    export class PacoteController{
        //variavesi dom
        private inputPacote:HTMLInputElement;
        private inputStatus:NodeList//HTMLInputElement;
        private inputData:HTMLInputElement;
        private inputDescricaoPacote:HTMLInputElement;
       

        //variaveis manipulacao objeto
        private pacotes=new Pacotes();
        private pacotesView= new PacotesView("#cards");
        private pacoteService= new PacoteService();
        
        constructor(){
            this.inputPacote=document.querySelector("#nome_pacote") as HTMLInputElement;  
            //this.inputStatus=document.querySelector('input[name="status_pacote"]:checked') as HTMLInputElement; 
            this.inputStatus=document.querySelectorAll('input[name="status_pacote"]') as  NodeList
            
            this.inputData=document.querySelector("#input-data-viagem") as HTMLInputElement;  
            this.inputDescricaoPacote=document.querySelector("#txt_descricao_pacote") as HTMLInputElement;  
            
        }
        adiciona(){
            //console.log(this.inputStatus)
            const pacote= Pacote.criar(
                this.inputPacote.value,
                this.inputDescricaoPacote.value,
                this.inputData.value,
                this.inputStatus
            )
            //console.log(pacote);
            this.pacotes.adicionar(pacote);
            //console.log(this.pacotes.lista());
            this.pacotesView.update(this.pacotes);
        }
        editar(){
            
        }

        public importaDados(){
            this.pacoteService.obterPacotes()
                .then(pacotesApi=>{//ista de pacotes
                    for(let pacote of pacotesApi){
                    
                        this.pacotes.adicionar(pacote)
                    }
                    this.pacotesView.update(this.pacotes);
                }
                    
                )
                     
        }
        
    }
