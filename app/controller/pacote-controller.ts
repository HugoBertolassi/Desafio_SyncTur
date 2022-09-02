
import {  AtualizarEventListenerCards } from "../app.js";
import { Pacote } from "../model/pacote.js";
import { Pacotes } from "../model/pacotes.js";
import { PacoteService } from "../service/pacote-service.js";
import { PacotesView } from "../view/pacotes-view.js";


    export class PacoteController {
        //variavesi dom
        private inputPacote:HTMLInputElement;
        private inputStatus:NodeList//HTMLInputElement;
        private inputData:HTMLInputElement;
        private inputDescricaoPacote:HTMLInputElement;
        private inputID:HTMLInputElement;
        private btnEditar:HTMLButtonElement;
        private btnCadastrar:HTMLButtonElement;
        private inputStatusAtivo:HTMLInputElement;
       
        private inputStatusInativo:HTMLInputElement;

        //variaveis manipulacao objeto
        private pacotes=new Pacotes();
        private pacotesView= new PacotesView("#cards");
        private pacoteService= new PacoteService();
    
        
        constructor(){
            
            this.inputPacote=document.querySelector("#nome_pacote") as HTMLInputElement;  
            //this.inputStatus=document.querySelector('input[name="status_pacote"]:checked') as HTMLInputElement; 
            this.inputStatus=document.querySelectorAll('input[name="status_pacote"]') as  NodeList
            this.inputStatusAtivo=document.querySelector('#status_pacote_ativo') as  HTMLInputElement
            this.inputStatusInativo=document.querySelector('#status_pacote_inativo') as  HTMLInputElement

            this.inputData=document.querySelector("#input-data-viagem") as HTMLInputElement;  
            this.inputDescricaoPacote=document.querySelector("#txt_descricao_pacote") as HTMLInputElement;
            this.inputID=document.querySelector("#input_ID") as HTMLInputElement;
            
            //cria event listener do botao editar
            this.btnEditar=document.querySelector("#btn_editar2") as HTMLButtonElement
            this.btnEditar.addEventListener('click',()=>{
                this.btnEditar.style.display="none";
                this.btnCadastrar.style.display="block";
                this.editar(2,"#editar"+this.inputID.value);//tenho o id que quero editar mas o codigo trata o id no formato #editar + ID
            })
            this.btnCadastrar=document.querySelector("#btn_cadastrar") as HTMLButtonElement;
            
        }

        adiciona(retorna?:boolean){
            
            if(this.inputID.value=="0"){
                this.inputID.value=this.pacotes.lastID()
            }

            let dataAtual=new Date();
            let dataInput=new Date(this.inputData.value)
            if( dataInput< dataAtual ){
                this.inputData.focus();
                return alert("Data menor que a atual, favor checar")
            }
            if(!this.inputData.value){    
                this.inputData.focus();
                return alert("Data invalida")
            }
            if(!this.inputPacote.value){    
                this.inputPacote.focus();
                return alert("Nome do pacote Invalido")
            }   
            

            const pacote= Pacote.criar(
                this.inputPacote.value,
                this.inputDescricaoPacote.value,
                this.inputData.value,
                this.radioAtivoToBoolean(this.inputStatus),
                this.inputID.value
            )
            //console.log(pacote);
            this.pacotes.adicionar(pacote);
            //console.log(this.pacotes.lista());
            
            AtualizarEventListenerCards(1000)
            this.pacotesView.update(this.pacotes);
            this.limparCamposInputs()

            if(retorna){
                return true;
            }
        }

        selecionar(seletor:string):Pacote{
            const pacote=this.pacotes.selecionar(seletor)
            return(pacote)
        }

        editar(etapa:number,seletor:string){
            //pegar os dados e colocar na tela
           if(etapa==1 && seletor){
                const pacote=this.pacotes.selecionar(seletor)
                
                //injecao dos dados no html
                this.inputPacote.value=pacote.nome;
                this.inputDescricaoPacote.value=pacote.descricao;
                this.inputData.value=this.dataTexto(pacote.data);
                this.inputID.value=pacote.id.toString()
                this.injecaoRadioButtonStatus(pacote)
                window.scrollTo(0,0)
                
                this.btnCadastrar.style.display="none"
                this.btnEditar.style.display="block"            
            }
            else if(etapa==2){//gravar a informacao e excluir a anterior
                if(this.adiciona(true)){
                    this.excluir(seletor,false)
                    alert(`Pacote editado com sucesso`)    
                }
            }
            else{
                throw Error("MEtodo em editar nao encontrado")
            }
          
            AtualizarEventListenerCards(500)
            this.pacotesView.update(this.pacotes);
        }

        excluir(seletor:string,mensagem?:boolean){
            //console.log(this.pacotes.lista());
            if(!mensagem){
                mensagem=false;
            }
            this.pacotes.excluir(seletor,mensagem);
            AtualizarEventListenerCards(1000)
            this.pacotesView.update(this.pacotes);

        }

        //chama api de importacao dos dados
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

        //formata data para colocar dentro do input date
        protected dataTexto(data:Date):string{
            let dataString:string;
            
            let mes=(data.getMonth()<9 ? "0"+(data.getMonth()+1).toString():(data.getMonth()+1).toString())//tratamento do texto mes <q 10
            let dia=(data.getDate()<10 ? "0"+data.getDate().toString():data.getDate().toString())//tratamento do texto dia < q 10
            
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
                
        }

        // Marca o button selecionado
        protected injecaoRadioButtonStatus(pacote:Pacote,tratamentoInjecaodireta?:boolean):void{

            //codigo tratamento radio button
            if(pacote.status==true){
                this.inputStatusAtivo.checked=true;
                //console.log("status vedadeiro")
            }
            else if(pacote.status==false){
                this.inputStatusInativo.checked=true;
                //console.log("status falso")
            }
            else(
                console.log("Status do botao nao encontrado")
            )    
        }

        //trata o radio para retornar boolean
        protected radioAtivoToBoolean(statusString:any):boolean{
            let _status1: string
            let _status3: boolean = false;
            for (let i = 0; i < statusString.length; i++) {
                
                if (statusString[i].checked===true) {
                    _status1 = statusString[i].value;
                    //console.log(`status1 ` + _status1)
    
                    if (_status1 == "ativo") {
                        _status3 = true;
                    }
                    else {
                        _status3 = false;
                    }
                    //console.log(_status3)
                }
            }
            return _status3
        }
    }
