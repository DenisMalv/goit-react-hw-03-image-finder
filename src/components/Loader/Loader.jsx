import React from "react";
import { ImSpinner2 } from 'react-icons/im'
import propTypes from "prop-types";
import css from './loader.module.css'

const Loader = () => {
    return (
            <>
            <ImSpinner2 size="100" className={ css.loader }/> 
            </>
        )
}

Loader.propTypes = {

    }

export default Loader
