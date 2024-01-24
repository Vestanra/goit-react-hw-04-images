import { useEffect, useState } from "react";
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

    useEffect(() => {
        const body = document.body;
        if (modalIsOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        return () => {
            body.style.overflow = 'auto';
        };
    }, [modalIsOpen]);
        
    return (
        <ImgWrapper >
            <Img
                alt={tags}
                src={webformatURL}
                onClick={()=>openModal(largeImageURL, tags)}
                loading="lazy"/>
            <Modal
                img={modalImg}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                />
        </ImgWrapper>
    )
}

ImageGalleryItem.propTypes = {
    tags: PropTypes.string,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
};

