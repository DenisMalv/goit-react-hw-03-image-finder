import React, { Component } from 'react';
import { MainContainer } from './App.styled.js';

import Searchbar from './Searchbar/Searchbar';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import galleryApi from '../services/image-gallery-api';

class App extends Component {
  state = {
    query: '',
    page: 0,
    queryResponponce: [],
    error: null,
    status: '',
    showModal: false,
    modalImage: null,
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleModalLargeImage = image => {
    this.setState({ modalImage: image });
  };

  render() {
    const { queryResponponce, status, showModal, modalImage } = this.state;

    return (
      <MainContainer>
        <Searchbar>
          <SearchForm onSubmit={this.handleSubmit} />
        </Searchbar>
        {queryResponponce.length !== 0 && (
          <ImageGallery
            images={queryResponponce}
            toggleModal={this.toggleModal}
            modalImage={this.handleModalLargeImage}
          />
        )}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Button nextPage={this.handleLoadMore} />}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={modalImage} />
        )}
      </MainContainer>
    );
  }
}

export default App;
