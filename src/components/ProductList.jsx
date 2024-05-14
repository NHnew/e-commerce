import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';

const ProductList = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);
    console.log(products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
        <div className='grid grid-cols-2 grid gap-4'>
            {
                products.map((product) => (
                    <div key={product.id} className='p-3 cursor-pointer border flex flex-col items-center justify-center shadow-xl h-[400px] overflow-hidden'>
                        <img style={{ width: '150px' }} src={product.image} alt="" />
                        <h2>{product.title}</h2>
                        <h3>{product.description.substring(0, 35)}...</h3>
                        <h4>{product.price}</h4>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductList;