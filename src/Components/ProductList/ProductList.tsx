import type { ProductType } from "../../types/Types";
import Product from "../Product/Product";

// here it's not a product but a list of product that we send
interface ProductListProps{


    products:ProductType[]
}


// we take a list of products and render all of it 
const ProductList =({products}:ProductListProps)=>{

    // this is a list of products that is generated from product component
 const list = products.map(product=>{

    return(<Product product ={product}/>);
 });

return(<>{list}</>)

}

export default ProductList;
