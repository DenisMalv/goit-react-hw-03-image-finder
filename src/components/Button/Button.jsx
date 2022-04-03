import React from "react";
import propTypes from "prop-types";
import css from './Button.module.css'

const Button = () => {
    return (
        <button className={ css.Button }type='button'>load More</button>
    )
}

Button.propTypes = {
        filteredContact: propTypes.arrayOf(propTypes.exact({
            id: propTypes.string,
            name: propTypes.string,
            number: propTypes.string,
        })),
        deleteContact: propTypes.func,
    }

export default Button