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
function Product({title, price=1}){ 
    let isDiscount = price > 35000; 
    let styles = {backgroundColor: isDiscount ? "yellow" : ""}  
    return(
        <div className="Product" style={styles}>
        <h1>{title}</h1>
        <h3>Price : {price}</h3>
        {/* <p> {price > 35000 ? "Discount : 5%" : ""}</p> */}
        {/* {price > 35000 ? <p>Discount : 5%</p> : null} */}
        {/* {price > 35000 ? <p>Discount : 5%</p> : <a href="/">Get Discount</a>} */}
        {price > 35000 && <p>Dicount : 5%</p>}
        </div>
        )
}

export default Product;
