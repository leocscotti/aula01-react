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

    const handleChange= (e)=>[
        e.preventDefault();

        const {name, value}= e.target;

        setProduto({...produto,[name]:value});
    ]

    const handleSubmit= (e)=>[
        e.preventDefault();
        ListaProdutos.push(produto);
        navigate("/produto");
    ]

  return (
    <div>
        <h1>Cadastro de Produtos</h1>
        <div>
        <form>
            <fieldset>
              <legend>PRODUTO</legend>
              <div>
                <label htmlFor="idNome">Nome do Produto:</label>
                <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição do Produto:</label>
                <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idValor">Valor do Produto:</label>
                <input type="text" name="valor" id="idValor" value={produto.valor} onChange={handleChange}/>
              </div>
              <div>
                <button>EDITAR</button>
              </div>
            </fieldset>
          </form>
          </div>
    </div>
    
        
    

  )
}
