import React from 'react';


const BDirection = (props) => {
    //console.log(props);
    if (props.estilo === "linear-gradient") {

    return (<div className= "BDirection">
        <div className="BDirection-container">
            <h4>DIRECTION:</h4>
            <button type="button" onClick={() => props.setChangeDirection("to top")}>Top</button>
            <button type="button" onClick={() => props.setChangeDirection("to right top")}>Top right</button>
            <button type="button" onClick={() => props.setChangeDirection("to right")}>Right</button>
            <button type="button" onClick={() => props.setChangeDirection("to right bottom")}>Bottom right</button>
            <button type="button" onClick={() => props.setChangeDirection("to bottom")}>Bottom</button>
            <button type="button" onClick={() => props.setChangeDirection("to left bottom")}>Bottom left</button>
            <button type="button" onClick={() => props.setChangeDirection("to left")}>Left</button>
            <button type="button" onClick={() => props.setChangeDirection("to left top")}>Top left</button>
        </div>
    </div>
    );
 } else {
    return (<div className= "BDirection">
    <div className="BDirection-container">
        <h4>DIRECTION:</h4>
        <button type="button" onClick={() => props.setChangeDirection("at center top")}>Top</button>
        <button type="button" onClick={() => props.setChangeDirection("at right top")}>Top right</button>
        <button type="button" onClick={() => props.setChangeDirection("at right center")}>Right</button>
        <button type="button" onClick={() => props.setChangeDirection("at right bottom")}>Bottom right</button>
        <button type="button" onClick={() => props.setChangeDirection("at center bottom")}>Bottom</button>
        <button type="button" onClick={() => props.setChangeDirection("at center center")}>Center</button>
        <button type="button" onClick={() => props.setChangeDirection("at left bottom")}>Bottom left</button>
        <button type="button" onClick={() => props.setChangeDirection("at left center")}>Left</button>
        <button type="button" onClick={() => props.setChangeDirection("at left top")}>Top left</button>
    </div>
</div>
);
 }
};


export default BDirection; 