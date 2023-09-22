import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";

export default function InserirProduto() {
    document.title= "CADASTRAR";

    //Gerando novo id
    let novoId= ListaProdutos[ListaProdutos.length -1].id+1;

    const [produto, setProduto]= useState({
        id: novoId,
        nome:"",
        desc:"",
        valor:""
    });

  return (
    <div>Cadastro de Produtos</div>
  )
}
