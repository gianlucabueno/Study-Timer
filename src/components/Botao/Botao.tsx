import React from "react";
import style from './botao.module.scss';


interface props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}
const Botao = ({onClick, type, children}:props) =>{
    return(
        <button 
            onClick={onClick}
            type={type} 
            className={style.botao}
        >
            {children}
        </button>
    )
}

export default Botao