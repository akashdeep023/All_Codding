import Product from "./Product";
// function ProductTab(){
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

    // return (
    // <>
    // <Product title={"Mobile"} price={32000} />
    // <Product title="Laptop" price={40000} />
    // <Product title="Pen" />
    // </>
    // )
// }

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
    }
    return (
        <div style={styles}>
            <Product title={"Logitech MX Master"} idx={0} />
            <Product title={"Apple Pencil (2nd Gen"} idx={1} />
            <Product title={"Zebronics Zeb-transformer"} idx={2} />
            <Product title={"Petronics Toad 23"} idx={3} />
        </div>
    )
}
export default ProductTab;