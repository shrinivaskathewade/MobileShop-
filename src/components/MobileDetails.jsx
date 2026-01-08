import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItems,removeItems } from '../utils/cartSlice';

const MobileDetails = () => {
  const location = useLocation();
  const mobile = location.state?.mobile;
  const dispatch = useDispatch();

  if (!mobile) {
    return <h2 style={{ textAlign: "center" }}>Mobile not found</h2>
  }
  
  const handleMobile = (mobile) => {
    dispatch(addItems(mobile)) 
  }
  const handleRemove = () =>{
     dispatch(removeItems())
  }

  return (
    <div className="details">
      <div className="details-card">
        <div className='pic'>
          <img className='imgdata' src={mobile.thumbnail} alt={mobile.title} />
        </div>

        <div className='data'>
          <h2>{mobile.title}</h2>
          <h3>Brand: {mobile.brand}</h3>
          <p><strong>Price:</strong> ${mobile.price}</p>
          <p><strong>Rating:</strong> {mobile.rating}</p>
          <p><strong>Stock:</strong> {mobile.stock}</p>
        <p><strong>Category:</strong> {mobile.category}</p>
        <p><strong>Discount:</strong> {mobile.discountPercentage}%</p>
         <p><strong>Description:</strong> {mobile.description}</p>
         <div className='cartButton'>
             <button className='redux' onClick={() => {
           handleMobile(mobile)}}>Add to Cart</button>
           <button className='redux' onClick={() =>{
            handleRemove()
           }}>Remove Cart</button>
         </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default MobileDetails
