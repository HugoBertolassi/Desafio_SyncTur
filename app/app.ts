
import { PacoteController } from "./controller/pacote-controller.js";


const pacoteController=new PacoteController();
const btn_cadastrar=document.querySelector("#btn_cadastrar") as HTMLElement;
const btn_editar=document.querySelector("#btn_editar")

export function  AtualizarEventListenerCards(miliseconds:number){
    setTimeout(() => {
    let tamanho//=document.getElementsByClassName("editar")
    let tamanhoNodeList=document.querySelectorAll(".editar")
    //let tamanhoHTMLCollection=document.getElementsByClassName("editar")
    //tamanho=tamanhoHTMLCollection
    tamanho=tamanhoNodeList
    
    //console.log(tamanho[0].getAttribute("id")) //estrutura para pegar o valor de um nodelist
    //console.log(tamanho[0].getAttribute("value"))
    //console.log(tamanho)
    /*let lastId=0;
    //funcao pegar ai
    tamanho.map((data,index)=>{
        if(data.id>){
             i=index;
        }  
    })*/
    console.log("tamnho length: "+tamanho.length)
    for(let i=0;i<tamanho.length;i++){
            let id=tamanho[i].getAttribute("value") as string//garante que o valor o event listener vai ser criado conforme o array
            let seletor="#editar"+id.toString()
            document.querySelector(seletor)?.addEventListener('click',()=>{
                pacoteController.editar(1,seletor)//foi chamado um metodo diferente para a pessoa poder importar e editar os dados e depois incluir
            })
            let seletor1="#excluir"+id.toString()
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
