import { Component } from "react";

class HijoDeporte extends Component{ 
    
    seleccionarFavorito =() =>{
        //LLAMAREMOS AL METODO DEL PARENT MEDIANTE props
        //CAPTURAMOS EL DEPORTE
        var deporte = this.props.nombre;
        //LLAMAMOS AL PARENT MEDIANTE PROPS
        //CON EL NOMBRE DEL METODO QUE NOS HAN INDICADO
        this.props.mostrarFavorito(deporte);
    }

    render(){
        return(<div>
            <h1 style={{color:"blue"}}>
                {this.props.nombre}
            </h1>
           
            <button onClick={() => this.seleccionarFavorito()}>
                Seleccionar favorito
            </button>
        </div>)
    }
}

export default HijoDeporte;