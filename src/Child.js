import React, {useContext} from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return (
    <div>
        <h2> This is first child name is: {counterValue} </h2> 
            </div>
    )
}
export default Child;