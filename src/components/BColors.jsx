import React from 'react';


const BColors = (props) => {
    console.log(props);
    return (<div className= "BColors">
        <div className="BColors-container">
            <h4>COLORS:</h4> 
            <button type="button" onClick={() => props.setChangeColorUno("red")}> red</button>
            <button type="button" onClick={() => props.setChangeColorDos("green")}> green</button>
            <button type="button">ref</button>
            <button type="button">ref</button>

        </div>
    </div>
    );
};


export default BColors; 

