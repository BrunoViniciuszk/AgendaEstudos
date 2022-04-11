import React from "react";
import Botao from "../botao";
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento:React.FormEvent) {
        evento.preventDefault()
        console.log('state', this.state)
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um Estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="Adicione um estudo" value={this.state.tarefa} onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} required/>
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Determine um Tempo</label>
                    <input type="time" name="tempo" id="tempo" step="1" min="00:00:00" max="02:00:00" value={this.state.tempo} onChange={evento => this.setState({...this.state, tempo: evento.target.value})} required/>
                </div>
                    <Botao type="submit">
                        Adicionar
                    </Botao>
            </form>
        )
    }
}
export default Formulario