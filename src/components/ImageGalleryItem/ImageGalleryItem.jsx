

export const ImageGalleryItem = ({ previewUrl, largeUrl, getImgUrl }) => {
    const handleClick = () => {
        getImgUrl(largeUrl);
    }

    return (
        <li>
          <img
            onClick={handleClick}
            src={previewUrl}
            alt=""
          />
        </li>
    )
}

