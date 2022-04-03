import React,{ Component } from "react";
import propTypes from "prop-types";
import css from './ImageGallery.module.css'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const KEY = '25247734-434310231cfff4911c33dadc4'

class ImageGallery extends Component {

    state = {
        queryResponponce: null,
        error: null,
        status:'idle'
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.queryText !== this.props.queryText) {
            this.setState({status:'pending' });
            console.log('новый запрос');
            console.log(this.state);

                fetch(`https://pixabay.com/api/?q=${this.props.queryText}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                    .then(responce => {
                        if (responce.ok) {
                            return responce.json()
                        }
                        // return Promise.reject(new Error(`Ужас нет файлов с тегом ${this.state.queryResponponce}`))
                    })
                    .then(({ hits }) => {
                        this.setState({ queryResponponce: hits, status: 'resolved' });
                        console.log(this.state);
                    })
                    .catch(error => this.setState({ error, status: 'rejected' }));

            
            // setTimeout(()=>this.setState({ loading: false }),1000)
        }
    }


    render() {


        if (this.state.status === 'idle') {
            console.log(this.state);
            return <div>asd</div>
        }
        if (this.state.status === 'pending') {
            console.log(this.state);
            return <div>Загружаем</div>
        }
        if (this.state.status === 'resolved') {
            console.log(this.state);
            return <ul className={css.ImageGallery}>
                {
                this.state.queryResponponce.map(({ id, largeImageURL, webformatURL }) => <ImageGalleryItem id={id} largeImage={largeImageURL} smalImage={webformatURL} key={id} />)
                }
            </ul>;
        }
        if (this.state.status === 'rejected') {
            console.log(this.state);
            return <div>{this.state.error.message}</div>
        }
    }
}

ImageGallery.propTypes = {
        filteredContact: propTypes.arrayOf(propTypes.exact({
            id: propTypes.string,
            name: propTypes.string,
            number: propTypes.string,
        })),
        deleteContact: propTypes.func,
    }

export default ImageGallery