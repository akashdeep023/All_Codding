import "./App.css";
import Button from "./Button";
import Form from "./Form";

import Counter from "./Counter";

import LikeButton from "./LikeButton";

function App() {
  // Handling Click events Non-Click events & Event Object------
  // return (
  //   <>
  //     {/* <Button /> */}
  //     <Form />
  //   </>
  // )

  // State in React---------------
  return (
    <>
      <h1>States in React</h1>
      <Counter />
    </>
  );

  // Activity : Create LikeButton-------------
  // return (
  //   <>
  //     <h4>States in React</h4>
  //     <LikeButton />
  //   </>
  // );
}

export default App;
