import React, { useState } from "react";
import style from './Lista.module.scss';
import '../../assets/img/check-mark.svg';
import  Item  from "./item";

interface ITarefa {
    tarefa:string,
    tempo:string,
}

function Lista({tarefas}: {tarefas: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista