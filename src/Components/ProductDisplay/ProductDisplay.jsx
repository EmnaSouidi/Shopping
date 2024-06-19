import React, { useContext } from 'react'
import './ProductDiplay.css'
import start_icon from '../Assets/star_icon.png';
import star_dull_icon from  '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';



const ProductDisplay = (props) => {
    const {product}= props;
    const {addToCart}= useContext(ShopContext);
    return(
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdiplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className="productdiplay-img">
                    <img className='productdipslay-main-img' src={product.image} alt="" />

                </div>
            </div>

            <div className="productdipslay-right">
                <h1> {product.name} </h1>
                <div className="productdisplay-right-star">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p> (122) </p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="product-right-price-new">${product.new_price}</div>
                </div>
                <div className="displayproduct-right-description">
                    description
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Siez</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'> <span>category :</span> </p>Women, tshirt , corp top
                <p className='productdisplay-right-category'> <span>tags :</span> </p>Modern latest
            </div>
                
        </div>
    )
}

export default ProductDisplay