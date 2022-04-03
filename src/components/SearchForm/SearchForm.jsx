import React,{Component} from 'react'
import css from './SearchForm.module.css'
import propTypes from 'prop-types'

class SearchForm extends Component {
        state = {
        queryValue: '',
    }

    handleImputChange = event => {
        const { value } = event.currentTarget
        console.log(value);
        console.log(this.state);
        
        this.setState({ queryValue: value})
    }

    handleSubmitForm = event => {
        event.preventDefault()
        if (this.state.queryValue.trim() === "") {
            return
        }
        this.props.onSubmit(this.state.queryValue.toLowerCase() )
        this.setState({queryValue:''})
    }

    render() {
        return (
            <form className={ css.SearchForm} onSubmit={this.handleSubmitForm}>
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
                    </form>
        )
    }

}


export default SearchForm
