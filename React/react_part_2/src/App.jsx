import "./App.css";
import ProductTab from "./ProductTab.jsx"; //group Product component----

// function App(){
//   // React Props----------------
//     return(
//       <ProductTab />
//     )
// }

// Activity--------------------------
// import Activity from './Activity.jsx';
// function App(){
//   return (
//     <div>
//       <Activity userName={"akash"} textColor={"yellow"} />
//       <Activity  userName={"Jack"} textColor={"blue"} />
//     </div>
//   )
// }

// Activity : Amazon Cards----------------------------

function App() {
  return (
    <>
      <h2>Blockbuster Deals | Shop Now</h2>
      <ProductTab />
    </>
    
  )
}

// ---------------------------
export default App;
