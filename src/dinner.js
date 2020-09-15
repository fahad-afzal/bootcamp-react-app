import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1>Today we are serving {props.dishName}</h1>
    <h1>Todau we are serving sweetdish {props.sweetdish}</h1>
       </div>
    );
}

export default Dinner;