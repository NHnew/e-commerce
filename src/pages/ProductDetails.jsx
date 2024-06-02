import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../redux/slices/productSlice';
import '../css/ProductDetails.css';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Button from '@mui/material/Button';
import { addToBasket } from '../redux/slices/basketSlice';
import { useDispatch } from 'react-redux';


const ProductDetails = () => {
    const [priceCount, setPriceCount] = useState(0);
    const { id } = useParams();
    const { data: product } = useGetProductsByIdQuery(id);
    const dispatch = useDispatch();


    const addBasket = () => {
        const payload = {
            id,
            price: product?.price,
            title: product?.title,
            description: product?.description,
            image: product?.image,
            category: product?.category,
            priceCount: product?.priceCount
        };
        if (priceCount != 0) {
            dispatch(addToBasket(payload));
        }
    };

    return (
        <div className='detailsInfoBox pt-[120px] mb-[20px] flex items-center'>
            <div className='w-2/5 details-imgbox'>
                <img className='details-img' src={product?.image} alt="" />
            </div>
            <div className='details-text w-3/5'>
                <div>
                    <h2>{product?.title}</h2>
                    <p>{product?.description}</p>
                    <h4><span className='details-span'>Category:</span> {product?.category}</h4>
                </div>
                <div>
                    <h5><span className='details-span'>Price:</span> {product?.price}$</h5>
                </div>
                <div className='flex items-center my-5'>
                    <CiCirclePlus onClick={() => setPriceCount(priceCount + 1)} className='countDetailsPrice' />
                    <span className='text-4xl mx-5'>{priceCount}</span>
                    <CiCircleMinus onClick={() => priceCount === 0 ? "" : setPriceCount(priceCount - 1)} className='countDetailsPrice' />
                </div>
                <Button onClick={addBasket} variant="contained" disableElevation>
                    Add Basket
                </Button>
            </div>
        </div>
    );
};

export default ProductDetails;


