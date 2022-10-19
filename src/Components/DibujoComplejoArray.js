import { Component } from "react";

class DibujoComplejoArray extends Component{
    //ALMACENAMOS DENTRO DEL STATE UN ARRAY
    //DE String (nombres)
    state= {
        nombres: ["Lucia", "Diana", "Adrian", "Marcos", "Carlos"]
    }
    nuevoNombre = () =>{
        //COMO AÑADIMOS ELEMENTOS A UN ARRAY?? push...
        this.state.nombres.push("NUEVO NOMBRE");
        this.setState({nombres:this.state.nombres

        });
    }

    render(){
        return(<div>
            <h1>Dibujo Complejo Array</h1>
            <button onClick={() => this.nuevoNombre()}>
                Crear nombre
            </button>
            {
                //CODIGO LOGICO CON LENGUAJE REACT
                this.state.nombres.map((name, index) =>{
                    //ESTE CODIGO SE EJECUTA POR CADA ELEMENTO
                    //NUNCA PODEMOS DEJARLO VACIO
                    //SIEMPRE DEBE DEVOLVER UN return
                    return(  <h3 key={index} style={{color:"red"}}>
                        {name}
                    </h3>);

                })
            }

        </div>)
    }


}


export default DibujoComplejoArray;