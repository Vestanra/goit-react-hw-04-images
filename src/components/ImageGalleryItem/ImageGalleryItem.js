import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Img, ImgWrapper } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item: { tags, webformatURL, largeImageURL } }) => {
    const [modalImg, setModalImg] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = (modalImg) => {
        setModalImg(modalImg);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    } 

    const onBackdropeClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            closeModal();
        }
    };
        
    return (
        <ImgWrapper>
            <Img
                alt={tags}
                src={webformatURL}
                onClick={()=>openModal(largeImageURL, tags)}
                loading="lazy"/>
            <Modal
                img={modalImg}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                onBackdropeClick={onBackdropeClick}/>
        </ImgWrapper>
    )
}

ImageGalleryItem.propTypes = {
    tags: PropTypes.string,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
};

