// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

//--------------------------------Start React-----------------------------------------

// How to create react file------
// command -> npm create vite@latest  -> choose framework & variant

// How to run  react file ------
// open file -> cd file_name
// install package -> npm install
// run file -> npm run dev  

import './App.css';

//-------------------------------Our 1st component----------------------
// function Title(){                   //Create 1st component--
//   return <h1>I am the Title!</h1>
// }
// function Description(){
//   return <h3>I am the Description!</h3>
// }

//-------------------------------improt-export----------------------
import Title from './Title.jsx';        //import  single component
// import {Title} from "./Title.jsx";   //import many components
// import Product from './Product.jsx';
import ProductTab from './ProductTab.jsx' //group Product component----


function App(){                         // main component--
  // return <h1>Hello World!</h1>;      //return only one component (h1) inside one element (h1)
  // return <p>Hello world</p>;
  // return (<button>Submit</button>);

  // return(                            // return only one component (div) inside many element (h1,p,btn) 
  //   <div>
  //   <h1>Hello World!</h1>
  //   <p>Hello World</p>
  //   <button>Click me!</button>
  //   </div>
  // )
  
  // return (              //return one other component
  // // <Title></Title>    //1st method--
  // <Title/>              //2nd method to include component--
  // );

  // return (                 //return many other component
  // <div>
  //   <Title/>
  //   <Description/>
  // </div>
  // );

  // Markup in JSX ---------------
  // return(                   //return other file component in className and id-----
  //   <div className='mainbox' id='mainboxs' >    
  //     <Title/>
  //     <Title/>
  //   </div>
  // )
  
  // React Fragment (widhout div)------
  // return(                   //return other file component without div element------
  //   <>    
  //     <Title/>
  //     <Title/>
  //   </>
  // )

  // JSX with Curly Braces (in use JavaScript ex-> {2*2})  use in component and import then use
  // let name = "Jack" //create a variable
  // return (
  //   <div>
  //   <h1>2 + 2 = {2*2}</h1>
  //   <h3>Hi, {name }</h3>
  //   <h3>Hi, {name.toUpperCase()}</h3>
  //   </div>
  // )

  // Structuring Components--------
    return(
      // <>
      // <Product/>
      // <Product/>
      // <Product/>
      // </>

      <ProductTab />
    )
} 

export default App;