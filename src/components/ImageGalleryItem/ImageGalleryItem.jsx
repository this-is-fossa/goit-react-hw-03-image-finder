import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ previewUrl, largeUrl, getImgUrl }) => {
    const handleClick = () => {
        getImgUrl(largeUrl);
    }

    return (
        <GalleryItem>
            <GalleryImg
            onClick={handleClick}
            src={previewUrl}
            alt=""
            />
        </GalleryItem>
    )
}


ImageGalleryItem.propTypes = {
    previewUrl: PropTypes.string.isRequired,
    largeUrl: PropTypes.string.isRequired,
    getImgUrl: PropTypes.func.isRequired,
};