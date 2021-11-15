import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import s from "../Searchbar/Searchbar.module.css";

function Searchbar ({onSubmit}) {
    const [query, setQuery] = useState('');

   const handleChange = (e) => {
        setQuery(e.target.value.toLowerCase())        
    }
     const handleSubmit = (e) => {
        e.preventDefault();

        if (query.trim() === '') {
            return toast.error("Enter search query!")
        }
        onSubmit(query)
        setQuery('');
    }

        return (
            <header className={s.Searchbar}>
                <form onSubmit={handleSubmit} className={s.SearchForm}>
                    <button type="submit" className={s.SearchForm__button}>
                        <span className={s.SearchForm__buttonLabel}>Search</span>
                    </button>
                    <input
                        className={s.SearchForm__input}
                        onChange={handleChange}
                        value={query}
                        name='query'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    
}

Searchbar.prototype = {
    onSubmit: PropTypes.func.isRequired
}

export default Searchbar