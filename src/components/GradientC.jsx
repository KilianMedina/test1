import React from 'react';


const GradientC = (props) => {
     let newBackground = {
        background: `${props.estilo}(${props.direccion},${props.colorUno},${props.colorDos})`
    }; 
    console.log("Options en GradientC", newBackground);


    return (<div className="GradientC">
        <div className= "GradientC-container">
            <div className="GradientC-show" style= {newBackground} >
            </div>
            <div className="GradientC-detail">

            </div>
        </div>
    </div>);
};

export default GradientC;