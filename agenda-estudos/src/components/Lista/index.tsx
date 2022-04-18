import React, { useState } from "react";
import style from './Lista.module.scss';
import '../../assets/img/check-mark.svg';
import  Item  from "./item";
import { ITarefa } from "../../types/tarefas"


interface Props {
    tarefas: ITarefa[],
    selecionaTarefa:(tarefaSelecionada: ITarefa) => void,
}


function Lista({tarefas, selecionaTarefa}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                        {...item}
                    />
                ))} 
            </ul>
        </aside>
    )
}

export default Lista