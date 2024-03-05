import React, { ReactNode } from 'react'
import style from './Botao.module.scss'

interface BotaoProps {
   children?: ReactNode
   type?: 'button' | 'submit' | 'reset', 
   onClick?: () => void,
}

function Botao({onClick, type, children} : BotaoProps){
  return (
   <button onClick={onClick} type={type} className={style.botao}>
   {children}
   </button>
  )
}

export default Botao
