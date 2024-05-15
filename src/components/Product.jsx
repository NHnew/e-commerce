import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Product.css';

const Product = ({ product }) => {

    const { id, price, title, description, image } = product;
    const navigate = useNavigate();

    return (
        <div className='card flex-column' key={id}>
            <img className='image' src={image} alt="" />
            <div className='mt-5 text-center'>
                <p className='title'>{title}</p>
                <h3 className='price'>{price}$</h3>
            </div>
            <div onClick={() => (navigate(`/product-details/${id}`))} className='detail-button'>
                <h5>Details...</h5>
            </div>
        </div>

    );
};

export default Product;