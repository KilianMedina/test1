import React from 'react';


const BFormat = (props) => (
    <div className= "BFormat">
        <div className="BFormat-container">
            <h4>COLOR FORMAT:</h4>
            <button type="button" /* onClick={() => props.setChangeColorUno("hex")} */>Hex</button>
            <button type="button" /* onClick={() => props.setChangeColorUno("rgb")} */>Rgb</button>
        </div>
    </div>
);


export default BFormat; 