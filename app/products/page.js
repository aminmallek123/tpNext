import React, { Suspense }  from 'react';  
import ProductList from '../../components/productList'; 
import CategoryList from '../../components/categoryList';

import { json } from 'react-router-dom';


async function getProducts(){ 
    const res= await fetch('https://fakestoreapi.com/products?limit=8') 
    const products = await res.json(JSON.parse); 
    return products; 
} 
async function getCategries(){ 
    const res= await fetch('https://api.escuelajs.co/api/v1/categories') 
    const categories = await res.json(JSON.parse); 
    return categories; 
   } 
const ProductsPage = async ()=> { 
    const products = await getProducts(); 
    const categories = await getCategries(); 
    console.log(products); 
    console.log(categories); 
    return ( 
        <>
          <ProductList products={products} />
    </>
 ); 
} 
export default ProductsPage; 