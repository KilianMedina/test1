import React from 'react';


const BStyle = (props) => {
    console.log(props);
   return( <div className= "BStyle">
        <div className="BStyle-container">
            <h4>STYLE:</h4>
            <button type="button" onClick={() => props.setChangeEstilo("linear-gradient")}>Linear</button>
            <button type="button" onClick={() => props.setChangeEstilo("radial-gradient")}>Radial</button>
        </div>
    </div>
    );
};


export default BStyle; 