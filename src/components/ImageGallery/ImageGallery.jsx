import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImage } from "services/PixabayApi";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Loader } from "components/Loader/Loader";
import { GalleryWraper, GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';


export class ImageGallery extends Component {

state = {
    images: [],
    loader: false
}

componentDidUpdate(prevProps) {
    if(prevProps.query !== this.props.query) {
        this.setState({ loader: true });

    getImage(this.props.query, this.props.currentPage, this.props.hitsPerPage )
        .then(r => r.json())
        .then(r => {
            this.setState({ images: r.hits});
            this.props.getInfo(r.totalHits);
        })
        .catch(e => {
            toast.error('error:' , e.message)
        })
        .finally(() => {
            this.setState({ loader: false })
        });
    } else if(prevProps.currentPage !== this.props.currentPage) {
        this.setState({ loader: true });

        getImage( this.props.query, this.props.currentPage, this.props.hitsPerPage)
            .then(r => r.json())
            .then(r => {
                this.setState({ images: [...this.state.images, ...r.hits] });
                this.props.getInfo(r.totalHits);
            })
            .catch(e => {
                toast.error('error:', e.message)
            })
            .finally(() => {
                this.setState({ loader: false })
            });
        }
    }

    render() {
        const { images } = this.state;

        return (
            <GalleryWraper>
                <GalleryList>
                    {images &&
                        images.map(image => (
                        <ImageGalleryItem
                            getImgUrl={this.props.getImgUrl}
                            key={image.id}
                            previewUrl={image.webformatURL}
                            largeUrl={image.largeImageURL}
                        />
            ))}
                </GalleryList>

                {this.state.loader && <Loader />}
            </GalleryWraper>
        )
    }
}

ImageGallery.propTypes = {
    currentPage: PropTypes.number.isRequired,
    getImgUrl: PropTypes.func.isRequired,
    getInfo: PropTypes.func.isRequired,
    hitsPerPage: PropTypes.number.isRequired,
    query: PropTypes.string,
};

