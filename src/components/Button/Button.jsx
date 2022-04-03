import React,{Component} from "react";
import propTypes from "prop-types";
import css from './Button.module.css'
import galleryApi from '../../services/image-gallery-api'

// const Button = ({query,page}) => {
    
//     return (
//         <button className={css.Button} type='button' onClick={() => {
//             galleryApi.fetchImages(query, counter)
//                 .then(({ hits }) => {
//                         counter+=1
//                         // this.setState({ queryResponponce: hits, status: 'resolved' });
//                         // console.log(this.state);
//                         console.log(counter);
//                 })
//                 .catch(error => this.setState({ error, status: 'rejected' }));
//         }}
//         >
//             load More
//         </button>
//     )
// }

class Button extends Component {
    state = {
        asd:1,
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentPage !== this.state.asd) {
            this.setState({asd:1})
        }
    }

    
    handleLoadMore = () => {
        // this.setState({asd:this.props.currentPage})
        console.log(this.state);
        this.props.nextPage(this.state.asd +=1)

        // console.log(this.props.page(this.state.asd+=1));
    }

    render() {
        return (
            <button className={css.Button} type='button' onClick={this.handleLoadMore}>
            load More
            </button>
        )
    }
}

// Button.propTypes = {
//         filteredContact: propTypes.arrayOf(propTypes.exact({
//             id: propTypes.string,
//             name: propTypes.string,
//             number: propTypes.string,
//         })),
//         deleteContact: propTypes.func,
//     }

export default Button