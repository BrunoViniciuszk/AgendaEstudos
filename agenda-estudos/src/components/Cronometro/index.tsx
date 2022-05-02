import React, { useEffect, useState } from "react";
import Botao from "../botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import tempoParaSegundos from "../../commons/utils/time";
import { ITarefa } from "../../types/tarefas";

interface Props {
    selecionado: ITarefa | undefined, finalizaTarefa: () => void;
}

 
export function Cronometro({selecionado, finalizaTarefa }: Props) {

    const [tempo, setTempo] = useState<number>()
    useEffect(() =>{
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(String(selecionado?.tempo))) 
        }
    }, [selecionado])

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador-1) 
                return regressiva(contador-1)
            }
            finalizaTarefa()
        }, 1000)        
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronometro</p>
            tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Iniciar
            </Botao>
        </div>
    )
}


export default Cronometro