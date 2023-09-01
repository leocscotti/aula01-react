import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowseRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home.jsx'
import EditarProdutos from './routes/EditarProdutos.jsx'
import Produtos from './routes/Produtos.jsx'
import Error404 from './routes/Erro404.jsx'

const router= createBrowseRouter{[
  {path: '/', element: <App/>, 
  children: [ 
    {path: '/', element: <Home/>},
    {path: }

  ]}
]};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
