import Product from "./Product";
function ProductTab(){
    // return(
    //     <>
    //     <Product title="Mobile" price={32000}/>
    //     <Product title="Laptop" price={40000}/>
    //     <Product title="Pen" />
    //     </>
    // )

    // return(     //array and object-------------
    //     <>
    //     {/* array ->  [ ] and object -> { } */}
    //     <Product title={"Mobile"} price={32000} features={["hi-tech","durable"]} features2={{a:"fast"}}/>
    //     </>
    // )

    return (
    <>
    <Product title={"Mobile"} price={32000} />
    <Product title="Laptop" price={40000} />
    <Product title="Pen" />
    </>
    )
}
export default ProductTab;