import React, { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "../Searchbar/Searchbar.module.css";

class Searchbar extends Component {
    state = {
        query:'',
    }
    handleChange = (e) => {
        this.setState({query: e.target.value.toLowerCase()})        
    }
    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.query.trim() === '') {
            return toast.error("Enter search query!")
           
        }
        this.props.onSubmit(this.state.query)
        this.setState({ query: '' });
    }
    render() {
        return (
            <header className={s.Searchbar}>
                <form onSubmit={this.handleSubmit} className={s.SearchForm}>
                    <button type="submit" className={s.SearchForm__button}>
                        <span className={s.SearchForm__buttonLabel}>Search</span>
                    </button>
                    <input
                        className={s.SearchForm__input}
                        onChange={this.handleChange}
                        value={this.state.query}
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
}
export default Searchbar