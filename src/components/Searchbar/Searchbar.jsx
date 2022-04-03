import React,{ Component } from "react";
import propTypes from "prop-types";
import css from './Searchbar.module.css'
import SearchForm from '../SearchForm/SearchForm'

class Searchbar extends Component {

    render() {
        
        return (
            <header className={css.Searchbar}>
                {this.props.children}
                {/* <form className={ css.SearchForm} onSubmit={this.handleSubmitForm}>
                    <button type="submit" className={ css.SearchForm__button}>
                        <span className={css.SearchForm__button__label}>Search</span>
                        </button>

                        <input
                        className={css.SearchForm__input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeolder="Search images and photos"
                        onChange={this.handleImputChange}
                        value={this.state.queryValue}
                        />
                    </form> */}
                </header>
        )
    }
}

export default Searchbar