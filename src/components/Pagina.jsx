import React from 'react'
import Footer from './Footer'
import Menu from './MenuServico'

const Pagina = (props) => {
  return (
    <div>
        <Menu/>
        <div>
            {props.children}
        </div>
        <Footer/>
    </div>
  )
}

export default Pagina