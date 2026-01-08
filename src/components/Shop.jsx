import React, { useEffect, useState } from 'react'
import Costumer from './Costumer.jsx'
import Search from './Search.jsx'
import { Link } from 'react-router-dom'

const Shop = () => {

  const [text, setText] = useState("");
  const [filteredData, setilteredData] = useState([]);


  useEffect (()=>{
   fetchApi()
  },[])
 
  async function fetchApi(){
    const response = await fetch("https://dummyjson.com/products/category/smartphones");
    const data = await response.json();
    setilteredData(data.products)
  }

    const handleClick = () => {
    const filter =data.products.filter((items) => (
      items.title.toLowerCase().includes(text.toLowerCase())
    ))
    setilteredData(filter)
  }

   
  return (
    <div>
      <div>
        <Search text={text}
          setText={setText}
          handleClick={handleClick} />
      </div>
      <div className='parent'>
        {filteredData.map((items) => (
          <Link className='a' to={`/mobile/${items.id}`} state={{ mobile: items }} key={items.id}> <Costumer key={items.id} mobileDetails={items} /> </Link>
        ))}
      </div>
    </div>
  )
}

export default Shop;
