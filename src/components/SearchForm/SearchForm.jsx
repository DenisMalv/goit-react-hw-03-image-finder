import React, { Component } from 'react';
import { Form, SearchButton, SearchInput } from './SearchForm.styled';
import propTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';

class SearchForm extends Component {
  state = {
    queryValue: '',
  };

  handleImputChange = event => {
    const { value } = event.currentTarget;

    this.setState({ queryValue: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    if (this.state.queryValue.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.queryValue.toLowerCase());
    this.setState({ queryValue: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmitForm}>
        <SearchButton type="submit">
          <BiSearchAlt size="32" />
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeolder="Search images and photos"
          onChange={this.handleImputChange}
          value={this.state.queryValue}
        />
      </Form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SearchForm;
