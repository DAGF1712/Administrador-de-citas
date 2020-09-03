import React, { Component } from 'react';
import Header from "./Header";
import AgregarCita from "./AgregarCita";
import ListaCitas from "./ListaCitas";

class App extends Component{
  state = {
    citas:[]
  }

componentDidMount(){
  const citasLS = localStorage.getItem(`citas`);
  if(citasLS){
    this.setState({
      citas:JSON.parse(citasLS)
    })
  }
}

componentDidUpdate(){
  localStorage.setItem(
    `citas`,
    JSON.stringify(this.state.citas)
    )
}

crearCita = (nuevaCita) => {
  const citas = [...this.state.citas,nuevaCita];

  this.setState({
    citas
  });
}

borrarCita = id => {
  const citasActuales = [...this.state.citas];
  const citas = citasActuales.filter(cita => cita.id !== id);

  this.setState({
    citas
  })}

  render(){
    return(
      <div className="container">
       
        <Header
          titulo="Administrador de citas"
        />

        <AgregarCita
          crearCita={this.crearCita}
        />

        <ListaCitas
          citas={this.state.citas}
          borrarCita={this.borrarCita}
        />

      </div>
      );
  }
}

export default App;
