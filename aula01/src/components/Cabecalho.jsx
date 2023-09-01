import {Link} from 'react-router-dom'
import {AiFillHome as H} from "react-icons/ai"

export default function Cabecalho() {
  return (
    <header>
        <h1>Vite + React/ Coded by rm550769</h1>
        <ul>
            <li></li>
            <p>Ir para a home- <Link to= '/'>Ir para</Link></p>
        </ul>
        <ul>
            <li></li>
            <p>Ir para Produtos- <Link to='/produtos'>Ir para</Link></p>
        </ul>
        <ul>
            <li></li>
            <p>Ir para EditarProdutos- <Link to= '/editar/produtos/2'>Ir para</Link></p>
        </ul>

    </header>
  )
}
