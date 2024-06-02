import React from 'react';
import Product from './Product';
import { useGetProductsQuery } from '../redux/slices/productSlice';
import Loading from './Loading';
const ProductList = () => {

    const { isLoading, data: products } = useGetProductsQuery();
    
    return (
        <div className='flex-row' style={{ flexWrap: 'wrap', marginTop: '80px', cursor: 'pointer' }}>
            <Loading loading={isLoading} />
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    );
};

export default ProductList;