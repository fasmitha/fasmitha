import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { add } from "./CartSlice"
import './App.css'

const BookList = () => {
    const [boook, setBoook] = useState([])
    const dispatch = useDispatch();
    const decQty = (id) => {
        const newItem = boook.map((item) => 
        item.id === id &&item.qty >1 ? {...item, qty: item.qty + 1} : item
        );
        setBoook(newItem);
    };
    const incQty = (id) => {
        const newItem = boook.map((item) =>
        item.id === id ? { ...item,qty:item.qty + 1 }: item
        );
        setBoook(newItem);
    };



    useEffect(() => {
        fetchBooks();
    }, [])
    const fetchBooks = async () => {
        const r = await axios.get("https://api.itbook.store/1.0/new")
            .then(r => setBoook(r.data.books));
    }

    const addbooks = (bk) => {
        dispatch(add(bk));
    }

    return (
        <div className="container">
            <div className="row ">
                {boook.map((bk) => (
                    <>
                        <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-4 g-5 ' key={bk.isbn13}>
                            <Link to={`/book/${bk.isbn13}`}>
                                <div className="text-center shadow-lg" id='myDIV' >
                                    <img src={bk.image} className="img w-100" alt={bk.title} height={300} />
                                
                                    <div className="text-center" class="hide">
                                <h5 className=" mb-0">{bk.title.substring(0, 13)}...</h5>
                                <p className="">{bk.price}</p>
                                {/* <p>Qty:<button className='btn bg-primary m-1 text-wite' onClick={() => decQty(bk.id)}>-</button>{bk.qty}<button onClick={() => incQty(bk.id)} className='btn bg-primary m-1 text-white'>+</button></p> */}
                                <button className='btn btn-outline-dark' onClick={() => addbooks(bk)}>Add to cart</button>
                            </div>
                                </div>
                            </Link>
                           
                        </div>

                    </>
                ))}
            </div>
        </div>
    )
}

export default BookList
