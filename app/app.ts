
import { PacoteController } from "./controller/pacote-controller.js";


const pacoteController=new PacoteController();
const btn_cadastrar=document.querySelector("#btn_cadastrar") as HTMLElement;
const btn_editar=document.querySelector("#btn_editar")
/*function editarClick():void{
    console.log("oiassasa")
    //console.log(id)
}*/

/*
btn_editar.addEventListener('click',event=>{
    //event.preventDefault();
    //pacoteController.adiciona();
    console.log("editar")
})
*/
//atalizao da tabela pela api
export function  AtualizarEventListenerCards(){
    console.log("funcao olar")
    console.log()
    setTimeout(() => {
    let tamanho=document.querySelectorAll(".editar")

    for(let i=0;i<tamanho.length;i++){
        let seletor="#editar"+i.toString()
        document.querySelector(seletor)?.addEventListener('click',()=>{
            pacoteController.editar(seletor)
        })
        let seletor1="#excluir"+i.toString()
        document.querySelector(seletor1)?.addEventListener('click',()=>{
            pacoteController.excluir(seletor1)
           // console.log(seletor1)
        })
    }
  }, 3000)}
window.onload=()=>{
    pacoteController.importaDados()
    AtualizarEventListenerCards()
    //console.log("ola")
    /*
    setTimeout(() => {
        let tamanho=document.querySelectorAll(".editar")
        //console.log(tamanho);
        //console.log(document.querySelector("#editar1"));
        //const botaoEditar=document.querySelector("#editar1");
        //botaoEditar?.addEventListener('click',()=>{
        
        for(let i=1;i<tamanho.length+1;i++){
            let seletor="#editar"+i.toString()
            document.querySelector(seletor)?.addEventListener('click',()=>{
                pacoteController.editar(seletor)
            })
            let seletor1="#excluir"+i.toString()
            document.querySelector(seletor1)?.addEventListener('click',()=>{
                pacoteController.excluir(seletor1)
               // console.log(seletor1)
            })
        }
      }, 3000)*/
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
