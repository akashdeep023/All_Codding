import { useEffect, useState } from "react";

// useEffect()----------------------
export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  let incCountx = () => {
    setCountx((currCount) => currCount + 1);
  };
  let incCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  // useEffect(function,dependencies)----------
  // useEffect(function printSomething() {       // every time Component re-render then print
  //     console.log("this is a side-effect")
  // })
  // useEffect(function printSomething() {       // only this(countx) state time Component re-render then print
  //     console.log("this is a side-effect")
  // },[countx])
  useEffect(function printSomething() {
    // only 1st time Component re-render then print
    console.log("this is a side-effect");
  }, []);
  return (
    <div>
      <h3>countx = {countx}</h3>
      <button onClick={incCountx}>+1</button>
      <br />
      <br />
      <h3>county = {county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}
