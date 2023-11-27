import React from 'react'
import { Link } from "react-router-dom";
import {  useSelector } from 'react-redux';
function Navbar() {
  const items = useSelector((state) => state.cart)
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-info-subtle">
    <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" alt="c"></img>

        <ul id="menu" className="navbar-nav ms-auto">
           <li className="navbar-brand"><Link to="/Home">HOME</Link></li>
           <li className="navbar-brand"><Link to="/BookList">GALLARY</Link></li>
            <li className="navbar-brand"><Link to="/About">ABOUT</Link></li>
            <li className="navbar-brand"><Link to="/Contact">CONTACT</Link></li>
            <li className="navbar-brand"><Link to="/Cart">CART : {items.length}</Link></li>
            {/* <li class="navbar-brand"><Link to="/cart">CART</Link></li>
            */}
            

</ul>
        </div>
        </div>
    </nav>
    </>
  )
}
export default Navbar