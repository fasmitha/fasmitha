import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Book1() {
    const [product,setproduct] =useState([])
    const [name,setname] = useState("")
    const [trigger,settrigger] = useState(false)
  
    useEffect(() => {
      fetchBook()
    },[])
      const fetchBook=async()=>{
      const res=  await Axios.get('https://api.itbook.store/1.0/new')
      .then(res=>setproduct(res.data.books));
    }


  
  
  return (
    <div>
      <div className="row">
      {product.map((u) =>
        (
          <>
          <div className='col-md-3 mb-4 text-center'>
            <div className="card h-100 text-center p-4 " key={u.isbn13}>
              <img src={u.image} classname="card-img-top" alt={u.title} width="200px" height="200px" />
              <div classname="card-body">
                <h5 classname="card-title mb-0">{u.title}</h5>
                <p className="card-text lead fw-bold">{u.price}</p>
                <Link to={`/Books/${u.isbn13}`} className="btn btn-outline-dark" data-bs-toggle="model" data-bs-target="#exampleModel">BUY NOW</Link><br></br>
                

                
  



                
                </div>
                </div>
                </div>
          </>
        ))}
    
    </div>
    
    </div>
  );
}
       


export default Book1