
import './App.css'
import Person from './Components/Person/Person'
import ProductList from './Components/ProductList/ProductList';
// import Product from './Components/Product/Product'
import type { ProductType } from './types/Types';
function App() {
 // we make an object of type ProductType that is sent to a component 
// const ProductObj:ProductType = {id:1,title:"Samsung",price:3121};

const products:ProductType[] =[
  {id:1,title:"Samsung",price:3121},
  {id:2,title:"bitphone",price:31221}
];


  return (
    <>
      <ProductList products ={products}/>
      <Person name="Lisa" email="lisa@gmail.com"/>
      {/* <Product product= {ProductObj}/> */}
    </>
  )
}

export default App
