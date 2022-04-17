import React, { Component } from 'react';
import { MainContainer } from './App.styled.js';

import Searchbar from './Searchbar/Searchbar';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import galleryApi from '../services/image-gallery-api';

class App extends Component {
  state = {
    query: '',
    page: 0,
    queryResponponce: [],
    error: null,
    status: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ status: 'pending' });
      if (page === 1) {
        this.setState({ queryResponponce: [] });
      }

      galleryApi
        .fetchImages(query, page)
        .then(({ hits }) => {
          const smallHits = galleryApi.smallFetchResponse(hits);
          this.setState(({ queryResponponce }) => ({
            queryResponponce: [...queryResponponce, ...smallHits],
            status: 'resolved',
          }));
          window.scrollBy({
            top: document.body.clientHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  render() {
    const { page, queryResponponce, status } = this.state;
    console.log(this.state.page);
    return (
      <MainContainer>
        <Searchbar>
          <SearchForm onSubmit={this.handleSubmit} />
        </Searchbar>
        {queryResponponce.length !== 0 && (
          <ImageGallery images={queryResponponce} />
        )}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <Button
            currentPage={page}
            nextPage={this.handleLoadMore}
            status={status}
          />
        )}
      </MainContainer>
    );
  }
}

export default App;
