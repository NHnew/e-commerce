import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Product.css';

const Product = ({ product }) => {

    const { id, price, title, description, image } = product;

    return (
        <div className='card flex-column' key={id}>
            <img className='image' src={image} alt="" />
            <div className='mt-5 text-center'>
                <p className='title'>{title}</p>
                <h3 className='price'>{price}$</h3>
            </div>
            <Link to={`/product-details/${id}`} className='detail-button'>
                <h5>Details...</h5>
            </Link>
        </div>

    );
};

export default Product;