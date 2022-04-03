import React, { Component } from "react";
import { nanoid } from 'nanoid'

import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";
import SearchForm from "./SearchForm/SearchForm";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'
import Button from './Button/Button'



class App extends Component {

  state = {
    query: '',
    page: 1,
  }

  handleSubmit = query => {
    this.setState({ query,page:1 })
    // setTimeout(()=>console.log(this.state),100)
    console.log(this.state);
  }
  handleLoadMore = page => {
    this.setState({ page })
    // setTimeout(()=>console.log(this.state),100)
    console.log(this.state);
  }

  render() {

    return (
      <div className='App'>
        
        <Searchbar>
          <SearchForm onSubmit={this.handleSubmit}/>
        </Searchbar>
        <ImageGallery queryText={this.state.query} pageNumber={ this.state.page}/>
        <Button currentPage={this.state.page} nextPage={ this.handleLoadMore }/>
        
      </div>
    )
  }
};

export default App

