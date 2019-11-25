import React from 'react';


const BDirection = (props) => {
    //console.log(props);
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
};


export default BDirection; 