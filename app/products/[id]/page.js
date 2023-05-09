import React from 'react';
import ProductDetails from './ProductDetails';

const ProductDetailsPage = ({params}) => {
  return (
    <div>
      <ProductDetails params={params} />
    </div>
  );
};

export default ProductDetailsPage;
