import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Search Book of Your Imagination</h2><br />
                <p className='header-text fs-18 fw-3'>Want to Search a book but not sure about the name or Just know the story of the book. BookFolio is exactly for indviduals like you. Search your favorite book by just entering some information about it!!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header