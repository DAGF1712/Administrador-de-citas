import React, { Component } from 'react';

class Cita extends Component {
	eliminarCita = () => {
		this.props.borrarCita(this.props.info.id)
	}

	render(){
		const{fecha,hora,paciente,edad,sintomas} = this.props.info;

	return(
		<div className="cita">
			<h3>{paciente}</h3>
			<p><span>Edad del paciente: </span>{edad}</p>
			<p><span>Fecha de la cita: </span>{fecha}</p>
			<p><span>Hora de la cita: </span>{hora}</p>
			<p><span>Sintomas del paciente: </span>{sintomas}</p>

			<button onClick={this.eliminarCita} className="borrar">Borrar &times;
			</button>
		</div>
		)
	}
}

export default Cita;