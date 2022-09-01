
import { PacoteController } from "./controller/pacote-controller.js";


const pacoteController=new PacoteController();
const btn_cadastrar=document.querySelector("#btn_cadastrar") as HTMLElement;
const btn_editar=document.querySelector("#btn_editar")

export function  AtualizarEventListenerCards(miliseconds:number){
    setTimeout(() => {
    let tamanho=document.querySelectorAll(".editar")
    console.log("tamnho length: "+tamanho.length)
    for(let i=0;i<tamanho.length;i++){
        let seletor="#editar"+i.toString()
        document.querySelector(seletor)?.addEventListener('click',()=>{
            pacoteController.editar(1,seletor)//foi chamado um metodo diferente para a pessoa poder importar e editar os dados e depois incluir
        })
        let seletor1="#excluir"+i.toString()
        document.querySelector(seletor1)?.addEventListener('click',()=>{
            pacoteController.excluir(seletor1)
           // console.log(seletor1)
        })
    }
  }, miliseconds)}
  
window.onload=()=>{
    pacoteController.importaDados()
    AtualizarEventListenerCards(3000)//tempo maior para resolver o  fetch e conseguir tratar os botoes
};


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

//teste botao editar
/*const botaoEditar=document.querySelector(".editar");
botaoEditar?.addEventListener('click',()=>{
    console.log("oi")
})*/
