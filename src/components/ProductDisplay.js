import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBalanceScale, faRuler } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';

function ProductDisplay() {
  const [item, setItem] = useState(null);
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        const productFound = data.find(item => item.id == slug);
        setItem(productFound);

        const otherProducts = data.filter(item => item.id != slug).slice(0, 4);
        setProducts(otherProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItems();
  }, []);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    item && (
      <div className='display container'>
        <div className='box left-box'>
          <img className='product-image' src={item.image} alt={item.title} />
        </div>
        <div className='box right-box'>
          <h1 className='product-title'>{item.title}</h1>
          <p className='product-description'>{item.description}</p>
          <p className='product-price'>${item.price}</p>
          <p className='product-status'>
            <FontAwesomeIcon icon={faBox} />
            <span>Status:</span>
            <span className='in-stock'>In Stock</span>
          </p>
          <div className='quantity-cart'>
            <div className='quantity-input'>
              <div 
                className='quantity-button minus' 
                onClick={handleDecrease}>-</div>
              <input 
                id='quantity' 
                type='number' 
                min='1' value={quantity} readOnly />
              <div className='quantity-button plus' 
                onClick={handleIncrease}>+</div>
            </div>
            <button className='add-to-cart-button'>Add to Cart</button>
          </div>
          <div className='wishlist-compare'>
            <p><FontAwesomeIcon icon={faHeart} />Add to Wishlist</p>
            <p>|</p>
            <p><FontAwesomeIcon icon={faBalanceScale} />Compare</p>
            <p>|</p>
            <p><FontAwesomeIcon icon={faRuler} />Size Guide</p>
          </div>
        </div>
        <div className='other-products'>
          <h2>Other Products</h2>
          {products.map(product => (
            <div key={product.id} className='product'>
              <img src={product.image} alt={product.title} />
              <h2 className='other-description'>{product.title}</h2>
              <p className='price-p'>${product.price}</p>
              <p className='other-p'>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default ProductDisplay;
