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
    query:'',
  }
  
  handleSubmit = query => {
    this.setState({ query })
    // setTimeout(()=>console.log(this.state),100)
    console.log(this.state);
  }

  render() {

    return (
      <div className='App'>
        
        <Searchbar>
          <SearchForm onSubmit={this.handleSubmit}/>
        </Searchbar>
        <ImageGallery queryText={ this.state.query }/>
        <Button/>
        
      </div>
    )
  }
};

export default App

