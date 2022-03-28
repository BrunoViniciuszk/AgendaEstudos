import React from "react";
import style from './Lista.module.scss';
import '../../assets/img/check-mark.svg';
import  Item  from "../item";

function lista() {
    const tarefas = [{
        tarefa: "JavaScript",
        tempo: "01:30:00",
    },
    {
        tarefa: "React",
        tempo: "02:00:00"
    },
    {
        tarefa: "TypeScript",
        tempo: "03:00:00"
    }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>

                {tarefas.map((item, index) => (
                    <Item
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default lista