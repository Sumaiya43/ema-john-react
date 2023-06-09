import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, rating } = props.product;

    const HandleEvent = props.handleEvent;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {rating} stars</p>
            </div>
            <button onClick={() => HandleEvent(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;