import { PacoteInterface } from "../interface/pacoteInterface.js";
import { Pacote } from "../model/pacote.js";

//consumo da api de dados de pacote
export class PacoteService{
    private api:string="https://62361b7feb166c26eb2f488a.mockapi.io/pacotes";

    public obterPacotes():Promise<Pacote[]>{
        return fetch(this.api)
            .then(response=>response.json())//convere os dados recebidos em JSON
            .then((dados:PacoteInterface[])=>{
                
                return dados.map((pacoteApi)=>{
              
                    let data= new Date(pacoteApi.data)//corrigir a data recebida pela API
                    
                    return new Pacote(
                        pacoteApi.nome,
                        pacoteApi.descricao,
                        data,
                        pacoteApi.status,
                        pacoteApi.id.toString()
                    )

                })
            })
    }
}
