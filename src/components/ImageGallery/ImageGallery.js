import { forwardRef } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export const ImageGallery = forwardRef(({ items }, ref) => {
    return (
        <div>
            <Gallery ref={ref}>
                {items.map((item) => (<ImageGalleryItem
                    key={item.id}
                    item={item}
                    />)
                )}
            </Gallery>            
        </div>
    )
})

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
}