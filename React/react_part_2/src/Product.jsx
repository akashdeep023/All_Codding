import "./Product.css";
// function Product(props){        //use props (object)---------------------------
//     console.log(props);
//     return(
//         <div className='Product'>
//         <h1>{props.title}</h1>
//         <h3>This is a description</h3>
//         </div>
//     )
// }

// destructuring props -------------------- props.title = { title }
//user by default value in parameters
//(string , number, array , object)

// function Product({ title, price = 1, features, features2 }) {
//   return (
//     <div className="Product">
//       <h1>{title}</h1>
//       <h3>Price : {price}</h3>
//       <p>
//         {features.map((feature) => (
//           <li>{feature}</li>
//         ))}
//       </p>
//       <p>{features2.a}</p>
//     </div>
//   );
// )

// condition --------------
// function Product({ title, price = 1 }) {
//   let isDiscount = price > 35000;
//   let styles = { backgroundColor: isDiscount ? "yellow" : "" };
//   return (
//     <div className="Product" style={styles}>
//       <h1>{title}</h1>
//       <h3>Price : {price}</h3>
//       {/* <p> {price > 35000 ? "Discount : 5%" : ""}</p> */}
//       {/* {price > 35000 ? <p>Discount : 5%</p> : null} */}
//       {/* {price > 35000 ? <p>Discount : 5%</p> : <a href="/">Get Discount</a>} */}
//       {price > 35000 && <p>Dicount : 5%</p>}
//     </div>
//   );
// }

// Activity : Amazon Cards----------------------------
import Price from "./Price";
function Product({ title, idx }) {
  let oldPrice = ["13,453", "32,745", "2,999", "999"];
  let newPrice = ["12,343", "30,435", "1,499", "599"];
  let description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intuitive surface", "Designed for Ipad Pro"],
    ["Designed for iPad Pro", "intuitive surface"],
    ["Wireless", "Optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
