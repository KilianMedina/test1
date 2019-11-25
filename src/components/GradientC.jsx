import React from 'react';


const GradientC = (props) => {
    console.log("Options en GradientC", props.estilo);
     let newBackground = {
        background: `background: ${props.estilo}(${props.direccion},${props.colorUno},${props.colorDos})`
    }; 


    return (<div className="GradientC">
        <div className= "GradientC-container">
            <div className="GradientC-show" style= {newBackground} >
               {props.estilo} 
            </div>
            <div className="GradientC-detail">

            </div>
        </div>
    </div>);
};

export default GradientC;