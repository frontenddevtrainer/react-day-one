import { useState } from "react";

function Counter(){

    const [counter, setCounter] = useState(0);

    function handleClick(){
        setCounter(counter + 1)
    }

    return <div>
        Counter is at {counter}
        <button onClick={handleClick}>1+</button>
    </div>
}

export default Counter;