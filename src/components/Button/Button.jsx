import React from 'react';
import propTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

// import Loader from '../Loader/Loader';

const Button = ({ status, nextPage }) => {
  // if (status === '') {
  //   return '';
  // }
  // if (status === 'pending') {
  //   return <Loader />;
  // }
  // if (status === 'resolved') {
  return (
    <LoadMoreButton type="button" onClick={nextPage}>
      Load More
    </LoadMoreButton>
  );
  // }
};

Button.propTypes = {
  currentPage: propTypes.number,
  nextPage: propTypes.func.isRequired,
  status: propTypes.string.isRequired,
};

export default Button;
