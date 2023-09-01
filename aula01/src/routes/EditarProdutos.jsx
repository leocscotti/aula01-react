import {useParams} from "react-router-dom"

export default function EditarProdutos() {

    const { id }= useParams();

  return (
    <div>
        <h1>EDITAR- PRODUTOS</h1>
        <p>PRODUTO SELECIONADO</p>
    </div>
  )
}
