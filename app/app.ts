import { PacoteController } from "./controller/pacote-controller.js";


const pacoteController=new PacoteController();
const btn_cadastrar=document.querySelector("#btn_cadastrar") as HTMLElement;


//atalizao da tabela pela api
window.onload=()=>pacoteController.importaDados();

//botao cadastrar    
if(btn_cadastrar){
    btn_cadastrar.addEventListener('click',event=>{
        event.preventDefault();
        pacoteController.adiciona();
        //console.log("clicou em cadastrar")
    })
}   
else{
    throw Error('Nao foi encontrado o botao cadastrar')
}

//teste botao cadastrar
/*btn_cadastrar.addEventListener('click',event=>{
    console.log("oi")
    const inputStatus:HTMLInputElement=document.querySelector('input[name="status_pacote"]:checked') as HTMLInputElement;
    console.log(inputStatus.value)

})*/
