import { useState } from "react";
import "./App.css";

function Counter() {

    let [count, setCount] = useState(0)

    function handleIncrement(){
        if(count <4){
            setCount(prev => prev + 1)	
        }
        else{
            alert(`Number can not be greater than 20`)
        }
        
    }
    function handleDecrement(){
        console.log(count)

        if (count>0){
            setCount(prev => prev -1)
        }
        else{
            alert(`Number can not be less than 0`)
        }
        return

    }

  return (
    <>
      <h1>Counter Number</h1>
      <h2>{count}</h2>
      <div className="card">
        <button onClick={handleIncrement}>Increment </button>
        <button onClick={handleDecrement}>Decrement </button>
      </div>
    </>
  );
}

export default Counter;
