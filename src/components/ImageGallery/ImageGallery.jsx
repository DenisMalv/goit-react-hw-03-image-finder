import React,{ Component } from "react";
import propTypes from "prop-types";
import css from './ImageGallery.module.css'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from '../Loader/Loader'
import galleryApi from '../../services/image-gallery-api'
import Modal from '../Modal/Modal'

// const KEY = '25247734-434310231cfff4911c33dadc4'

class ImageGallery extends Component {

    state = {
        queryResponponce: [],
        error: null,
        status: 'idle',
        
    }
    
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.queryText !== this.props.queryText || prevProps.pageNumber !== this.props.pageNumber) {
            this.setState({status:'pending', });
            console.log('новый запрос');
            console.log(this.state);
            if (this.props.pageNumber === 1) {
                this.setState({queryResponponce:[]})
            }

            galleryApi.fetchImages(this.props.queryText, this.props.pageNumber)
                .then(({ hits }) => {
                        this.setState({ queryResponponce: [...this.state.queryResponponce, ...hits], status: 'resolved'});
                        // console.log(this.state);
                })
                .catch(error => this.setState({ error, status: 'rejected' }));
                // fetch(`https://pixabay.com/api/?q=${this.props.queryText}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                //     .then(responce => {
                //         if (responce.ok) {
                //             return responce.json()
                //         }
                //         // return Promise.reject(new Error(`Ужас нет файлов с тегом ${this.state.queryResponponce}`))
                //     })
                //     .then(({ hits }) => {
                //         this.setState({ queryResponponce: hits, status: 'resolved' });
                //         console.log(this.state);
                //     })
                //     .catch(error => this.setState({ error, status: 'rejected' }));

            
            // setTimeout(()=>this.setState({ loading: false }),1000)
        }
        // if (prevProps.pageNumber !== this.props.pageNumber) {
        //         this.setState({status:'pending' })
        //         galleryApi.fetchImages(this.props.queryText, this.props.pageNumber)
        //         .then(({ hits }) => {
        //                 this.setState({ queryResponponce: hits, status: 'resolved',page:this.props.pageNumber});
        //                 // console.log(this.state);
        //         })
        //         .catch(error => this.setState({ error, status: 'rejected' }));
             
        // }
    }


    render() {
        // console.log(this.state);

        if (this.state.status === 'idle') {
            console.log(this.state);
            return <div>asd</div>
        }
        if (this.state.status === 'pending') {
            // console.log(this.state);
            return (
                <>
                <Loader/>
                <div>Загружаем</div>
                </>
            )
        }
        if (this.state.status === 'resolved') {
            console.log(this.state);
            return <ul className={css.ImageGallery}>
                {
                this.state.queryResponponce.map(({ id, largeImageURL, webformatURL }) => <ImageGalleryItem id={id} largeImage={largeImageURL} smalImage={webformatURL} key={id} />)
                }
                </ul>
                ;
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