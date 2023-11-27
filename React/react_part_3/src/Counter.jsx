import { useState } from "react";
function init() {
    console.log("init was execute")
    return Math.random()
}
export default function Counter() {
    // let count = 0;
    // function incCount() {
    //     count += 1
    //     console.log(count)
    // }
    // let [stateVariable, setStateVariable] = useState(value) ---- use State-----
    //initializetion----
    let [count, setCount] = useState(init);     // function ko call nhi karte hai sirf name likhte hai js kudh ak baar execute kar lega
    console.log("Component is rendered!")
    console.log(`count = ${count}`)

    // let incCount = () => {       //increase only 1
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     console.log(`inside incCounter, count = ${count}`)
    // }
    
    let incCount = () => {          //increase 2 value = 1 + 1
        setCount((currCount) => {
            return currCount + 1;
        });
        // setCount((currCount) => {
        //     return currCount + 1;
        // });
    }
    
    // let incCount = () => {              //normal update value = rendom value
    //     setCount(25);
    // }

    return (
        <div>
            <p>count : {count}</p>
            <button onClick={incCount}>increase</button>
        </div>
    )
}