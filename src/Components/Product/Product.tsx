import type { ProductType } from "../../types/Types";


interface ProductProps{
    product:ProductType
}


// we've said that component takes a object of type ProductType 
const Product = ({product}:ProductProps) =>   
    {   
        return(<>
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        </>);

      }

      export default Product;