import axios from "axios";
import { ProductDTO } from "../dto/product.dto";


const addProduct =(product:ProductDTO)=>{
   try{
       const storedProducts = localStorage.getItem('products');
       let products: ProductDTO[] = storedProducts ? JSON.parse(storedProducts) : [];
       let id = products.length+1;
       product.id = id.toLocaleString();
       products.push(product);
       console.log(products, 'product added')
       localStorage.setItem('products', JSON.stringify(products));
   }
   catch(err){
    console.log(err, 'err');
   }

}


const updatedProduct = (productId:string, product:ProductDTO) =>{
 try{
    const storedProducts = localStorage.getItem('products');
    let products: ProductDTO[] = storedProducts ? JSON.parse(storedProducts) : [];
    
  
    let productIndex = products.findIndex((product) => product.id == productId);
    
    if(productIndex==-1){
      return false;
    }
    products[productIndex] ={...products[productIndex], ...product};
    console.log(products, 'pro')
    localStorage.setItem('products', JSON.stringify(products));
    return true;
 }
 catch(err){
    console.log(err);
 }

}



const getProducts=()=>{
    try{
        const storedProducts = localStorage.getItem('products');
        if (!storedProducts) {
            console.log('No products found in localStorage');
            return null;
        }

        let products: ProductDTO[] = storedProducts ? JSON.parse(storedProducts) : [];
        
        return products;
     }
     catch(err){
        console.log(err);
     }
}


const getProductDetail = (productId: string): ProductDTO | null => {
  try {
    const storedProducts:any = localStorage.getItem('products');
    const products: ProductDTO[] = JSON.parse(storedProducts);
    if (!products) {
      console.log('No products found in localStorage');
      return null;
    }
    const product = products.find((product) => product.id == productId);
    if (!product) {
      console.log(`Product with id ${productId} not found`);
      return null;
    }
    return product;
  } catch (error) {
    console.error('Error retrieving product from localStorage:', error);
    return null;
  }

};


const DataService = {
  updatedProduct,
  addProduct,
  getProducts,
  getProductDetail
}


export default DataService