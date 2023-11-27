import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from './CartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart)
    const removebooks = (isbn13) => {
        dispatch(remove(isbn13))
    }
    return (
        <div>
            <div className='cartWrapper text-center' >
                {cartitems.map((item) => (
                    <div className='Card d-flex justify-content-around ' key={item.isbn13}>
                        <div><img src={item.image} width={200} height={200} alt="img" /></div>
                        <div><h5>{item.title}<br></br><h6>{item.subtitle}</h6></h5></div>
                        <div><h5>{item.price}</h5></div>
                        <div><button className='btn btn-outline-danger w-100' onClick={() => removebooks(item.isbn13)}>Delete</button></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart