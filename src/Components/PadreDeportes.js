import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component{

     //CREAMOS UN ARRAY DE DEPORTES EN state
    //PARA DIBUJARLO EN LA PAGINA
        state = {
            deportes:["Petanca","Curling","Poker","Padel","Paintball"],
            favorito: ""
        }
         //CREAMOS UN METODO QUE SERA LLAMADO DESDE EL HIJO
        //DONDEMOSTRAREMOS EL FAVORITO
        mostrarFavorito = (deporteSeleccionado) =>{
            //SEGUN RECIBIMOS UN VALOR DEL HIJO, LO INCLUIMOS
            //EN STATE PARA MOSTRARLO EN LA PAGINA
            this.setState({
                favorito: deporteSeleccionado
            });
        }
    render(){

    
        return(<div>
            <h1 style={{color:"red"}}>
                Padre deportes
            </h1>
            <h1 style={{backgroundColor: "yellow"}}>
                Su deporte favorito es ... {this.state.favorito}
            </h1>
            {
                //QUEREMOS DIUJAR CADA DEPORTE, PERO UTILIZANDO
                //LA ETIQUETA DEL HIJO
                this.state.deportes.map((deporte,index)=>{
                    return(<HijoDeporte nombre={deporte} key={index}
                    mostrarFavorito={this.mostrarFavorito}/>);
                })
            }
        </div>)
    }

}

export default PadreDeportes;