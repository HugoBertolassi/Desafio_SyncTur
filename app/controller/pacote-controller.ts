
import {  AtualizarEventListenerCards } from "../app.js";
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
        private inputID:HTMLInputElement;
        private btnEditar:HTMLButtonElement;
        private btnCadastrar:HTMLButtonElement;

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
            this.inputID=document.querySelector("#input_ID") as HTMLInputElement;
            this.btnEditar=document.querySelector("#btn_editar2") as HTMLButtonElement
            this.btnEditar.addEventListener('click',()=>{
                this.btnEditar.style.display="none";
                this.btnCadastrar.style.display="block";
                this.editar(2,"#editar"+this.inputID.value);//tenho o id que quero editar mas o codigo trata o id no formato #editar + ID
            })
            this.btnCadastrar=document.querySelector("#btn_cadastrar") as HTMLButtonElement;
            
        }

        adiciona(){
            //console.log(this.inputStatus)
            //tratamento de dados
            if(this.inputID.value=="0"){
                this.inputID.value=this.pacotes.lastID()
            }

            const pacote= Pacote.criar(
                this.inputPacote.value,
                this.inputDescricaoPacote.value,
                this.inputData.value,
                this.inputStatus,
                this.inputID.value
            )
            //console.log(pacote);
            this.pacotes.adicionar(pacote);
            console.log(this.pacotes.lista());
            
            AtualizarEventListenerCards(1000)
            this.pacotesView.update(this.pacotes);
            this.limparCamposInputs()
        }

        selecionar(seletor:string):Pacote{
            const pacote=this.pacotes.selecionar(seletor)
            
            //mostrar os dados para editar
           /* this.inputPacote.value=pacote.nome;
            this.inputDescricaoPacote.value=pacote.descricao;
            this.inputData.value=this.dataTexto(pacote.data);
            this.inputID.value=pacote.id.toString()
            console.log("criar codigo do status")
            
            this.btnCadastrar.style.display="none"
            this.btnEditar.style.display="block"
            console.log(pacote)            

            AtualizarEventListenerCards(500)*/
            return(pacote)
        }

        editar(etapa:number,seletor:string){
            //pegar os dados e colocar na tela
           if(etapa==1 && seletor){
                const pacote=this.pacotes.selecionar(seletor)

                this.inputPacote.value=pacote.nome;
                this.inputDescricaoPacote.value=pacote.descricao;
                this.inputData.value=this.dataTexto(pacote.data);
                this.inputID.value=pacote.id.toString()
                console.log("criar codigo do status")
            
                this.btnCadastrar.style.display="none"
                this.btnEditar.style.display="block"            
            }
            else if(etapa==2){//gravar a informacao e excluir a anterior
                this.excluir(seletor)
                this.adiciona()
            }
            else{
                throw Error("MEtodo em editar nao encontrado")
            }
            
           console.log(this.pacotes.lista());
            
            //console.log(this.pacotes.lista());
            /*
            this.inputPacote.value=pacote.nome;
            this.inputDescricaoPacote.value=pacote.descricao;
             this.inputData.value=this.dataTexto(pacote.data);*/
            //this.inputStatus=pacote.status;
            
            
            //this.pacotes.editar(seletor,pacote)
            //console.log(pacote)
            AtualizarEventListenerCards(500)
            this.pacotesView.update(this.pacotes);
        }
        excluir(seletor:string){
            //console.log(this.pacotes.lista());
            this.pacotes.excluir(seletor);
            //console.log(this.pacotes.lista());
            AtualizarEventListenerCards(1000)
            this.pacotesView.update(this.pacotes);

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

        protected dataTexto(data:Date):string{
            let dataString:string;
            
            let mes=(data.getMonth()<10 ? "0"+data.getMonth().toString():data.getMonth().toString())//tratamento do texto mes <q 10
            let dia=(data.getDate()<10 ? "0"+data.getMonth().toString():data.getDate().toString())//tratamento do texto dia < q 10
            
            dataString=(data.getFullYear().toString()+"-"
                    +mes+"-"    
                    +dia
                    )
            return dataString
        }

        protected limparCamposInputs(){
            this.inputPacote.value="";
                this.inputDescricaoPacote.value="";
                this.inputData.value="";
                this.inputID.value="0";
                console.log("limparCamposInputs:criar codigo do status")
        }
    }
