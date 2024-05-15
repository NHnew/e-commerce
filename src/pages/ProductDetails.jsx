import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetails.css';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Button from '@mui/material/Button';


const ProductDetails = () => {
    const [priceCount, setPriceCount] = useState(0);
    const { id } = useParams();
    const { products, selectedProduct } = useSelector(store => store.product);
    const dispatch = useDispatch();

    const { price, title, description, image, category } = selectedProduct;

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        });
    };

    return (
        <div className='pt-[120px] mb-[20px] flex items-center'>
            <div className='w-2/5 details-imgbox'>
                <img className='details-img' src={image} alt="" />
            </div>
            <div className='details-text w-3/5'>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h4><span className='details-span'>Category:</span> {category}</h4>
                </div>
                <div>
                    <h5><span className='details-span'>Price:</span> {price}$</h5>
                </div>
                <div className='flex items-center my-5'>
                    <CiCirclePlus onClick={() => setPriceCount(priceCount + 1)} className='countDetailsPrice' />
                    <span className='text-4xl mx-5'>{priceCount}</span>
                    <CiCircleMinus onClick={() => priceCount === 0 ? "" : setPriceCount(priceCount - 1)} className='countDetailsPrice' />
                </div>
                <Button variant="contained" disableElevation>
                    Add Basket
                </Button>
            </div>
        </div>
    );
};

export default ProductDetails;