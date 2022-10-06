import React, { useState } from "react";
import style from "./lista.module.scss";
import Item from "./Item/Item";
import { ITarefa } from "../../types/tarefa";

interface props{
    tarefas: ITarefa[]
    selecionaTarefa: (tarefaSelecionada:ITarefa) => void
}

const Lista = ( {tarefas,selecionaTarefa}: props) =>{
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) =>(
                    <Item 
                        key={item.id}
                        {...item}
                        selecionaTarefa={selecionaTarefa}
                    />
                    
                ))}
            </ul>
        </aside>
    )
}

export default Lista;