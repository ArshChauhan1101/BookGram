import React from "react";
import {FaSearch} from "react-icons/fa";
/*import { useNavigate } from "react-router-dom";*/
import "./SearchForm.css";

const SearchForm = () => {
    return (
        <div className= 'search-form'>
            <div className='container'>
                <div className='search-form-content'>
                    <form className= 'search-form'>
                        <div className='searchform-form-elem flex flex-sb bg-white' >
                            <input 
                            type = "text"
                            className='form-control' 
                            placeholder='The Lost world of Imagination..' 
                            />
                            <button 
                            type = "submit" 
                            className='flex flex -c'>
                                <FaSearch className = 'text-brown' size = {20}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchForm