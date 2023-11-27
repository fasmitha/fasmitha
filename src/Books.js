// import React, { useState } from 'react'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// function Books() {
//   const {isbn13}=useParams()
//   const [title,settitle]=useState("");
//   const [subtitle,setsubtitle]=useState("");
//   const [price,setprice]=useState("");
//   const [cover,setcover]=useState("");
//   const [desc,setdesc]=useState("")

//   useEffect(() => {
//     fetchBooks()
//   },)
//     const fetchBooks=async()=>{
//     const res=  await axios.get(`https://api.itbook.store/1.0/books/${isbn13}`)
//     settitle(res.data.title)
//     setsubtitle(res.data.subtitle)
//     setprice(res.data.price)
//     setcover(res.data.image)
//     setdesc(res.data.desc)
//   }


//   return (
//     <div className='row'>
//     <div className='text-center w-100'><h1>{title}</h1></div>
//     <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-5 g-3'>  <h2>{subtitle}</h2><br></br><p className='fs-5' >{desc}</p><Link to={"/Books"} className="btn text-bg-dark p-3 w-100">ADD TO CART</Link></div>
//     <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-5 g-3' text-center><img src={cover} className='w-100' alt="a" height={600}></img><h3 className='text-center'>{price}</h3></div>
    
  
    

    
//     </div>

//   )
// }

// export default Books;

import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { add } from './CartSlice';


// import {handleAdd} from 'react-router-dom';



function Books() {
  const dispatch = useDispatch();
  const {isbn13}=useParams()
  const [title,settitle]=useState("");
  const [subtitle,setsubtitle]=useState("");
  const [price,setprice]=useState("");
  const [cover,setcover]=useState("");
  const [desc,setdesc]=useState("");
  const [product,setproduct]=useState("");
   const [count,setCount]=useState(0)
const addcount= () =>{
  setCount(count+1)
}
  useEffect(() => {

    fetchBook()
  },[])
  
    const fetchBook=async()=>{
    const res=  await axios.get(`https://api.itbook.store/1.0/books/${isbn13}`)
    settitle(res.data.title)
    setsubtitle(res.data.subtitle)
    setprice(res.data.price)
    setcover(res.data.image)
    setdesc(res.data.desc)
  }
  const handleAdd = (product) => {
    dispatch(add(product));
};

  return (
    <div className='row'>
    <div className='text-center w-100'>
    </div>
    

    {/* <button onClick={addcount} className='btn btn-outline-dark p-3 w-50 mt-5'>AddtoCart</button> */}
    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-5 g-3'>
      <h2>{subtitle}</h2><br></br>
    <p className='fs-5' >{desc}</p><button onClick={addcount}>
       <Link to={"/Cart"} className="btn text-bg-white p-2 w-10 mt-1">
      <button onClick={() => handleAdd(product)} className='btn'>ADD TO CART</button></Link></button></div>

    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-5 g-3' text-center><img src={cover} className='w-100' height={600}></img><h3 className='text-center text-dark'>{price}</h3></div>
    </div>
    

  )
}

export default Books;