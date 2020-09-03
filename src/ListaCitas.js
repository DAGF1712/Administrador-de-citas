import React, { Component } from 'react';
import Cita from "./Cita";

class ListaCitas extends Component{
	render(){
		const citas = this.props.citas;

		const mensaje = Object.keys(citas).length === 0 ? "No hay citas" : "Administra tus citas";

	return(
		<div className="indicador">
			<h2>{mensaje}</h2>
			{Object.keys(this.props.citas).map(cita =>(
				<Cita
					key={cita}
					info={this.props.citas[cita]}
					borrarCita={this.props.borrarCita}
				/>
				))}
		</div>
		)	

	}
}

export default ListaCitas;