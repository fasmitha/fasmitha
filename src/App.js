

import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import store from './store';
import About from './About';
import Footer from './components/Footer';
import Contact from './Contact';
import Navbar from './Navbar';
import Books from './Books';
import Book1 from './Book1';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import BookList from './BookList'
export default function App() {
  return (
    <>
    <div className="app">
    <Navbar/>
   
    

     <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Books" element={<Books/>}/>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/booklist" element={<BookList />} />

      <Route path = "Books/:isbn13" element = {<Books/>}/>
        <Route path = "/Book1" element = {<Book1/>}/>
       

     </Routes>
     <Footer/>
    </div></>
  );
}
