import React from 'react'

const Costumer = ({mobileDetails}) => {
  return (
    <div className='card'>
       <div className="img">
            <img src= {mobileDetails.thumbnail} alt= {mobileDetails.title} />
       </div>
       <div className="disc">
             <h3>Brand : {mobileDetails.title}</h3>
             <p><strong>Rating :</strong> {mobileDetails.rating}</p>
             <p><strong>Price :</strong> {mobileDetails.price}</p>
             <h3>Discount :{mobileDetails.discountPercentage}</h3>
             
       </div>
    </div>
  )
}

export default Costumer;
