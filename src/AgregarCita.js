import React, { Component } from 'react';
import uuid from "uuid";

class AgregarCita extends Component{
	//refs
	nombrePacienteRef = React.createRef();
	edadPacienteRef = React.createRef();
	fechaRef = React.createRef();
	horaRef = React.createRef();
	sintomasRef = React.createRef();

	state = {
		error:false
	}

	crearNuevaCita = e => {
		e.preventDefault();

		const paciente = this.nombrePacienteRef.current.value,
			edad = this.edadPacienteRef.current.value,
			fecha = this.fechaRef.current.value,
			hora = this.horaRef.current.value,
			sintomas = this.sintomasRef.current.value;

		if(paciente === "" || edad === "" || fecha === "" || hora === "" || sintomas === ""){
			this.setState({
				error:true
			})
		}

		else{
			const nuevaCita = {
				id:uuid(),
				paciente,
				edad,
				fecha,
				hora,
				sintomas
			}

		//se envia el objeto hacia el padre actualizando el state
			this.props.crearCita(nuevaCita);
		//reiniciar el formulario
			e.currentTarget.reset();
		//eliminar error 
			this.setState({
				error:false
			})
		}

	}

	render(){
		const existeError=this.state.error;

	return(
		<div className="container-form">
			<h2>Agrega las citas aqui</h2>
			<form onSubmit={this.crearNuevaCita}>
				
				<label>Nombre paciente </label>
				<input ref={this.nombrePacienteRef} type="text" placeholder="Nombre del paciente"/>
				
				<br/>

				<label>Edad paciente </label>
				<input ref={this.edadPacienteRef} type="number" className="edad" placeholder="Edad del paciente"/>

				<br/>

				<label>Fecha de la cita </label>
				<input ref={this.fechaRef} className="fecha" type="date"/>

				<br/>

				<label>Hora de la cita </label>
				<input ref={this.horaRef} className="hora" type="time"/>

				<br/>
				<br/>

				<label>Sintomas del paciente </label>
				<br/>
				<textarea ref={this.sintomasRef}></textarea>

				<br/>

				<button type="submit" className="agregar">Agregar +</button>
			</form>

			{existeError ? <div className="error">Todos los campos son obligatorios</div> : "" }
		</div>
		);
	}
}

export default AgregarCita;