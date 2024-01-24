import ReactModal from 'react-modal'; 
import { StyledReactModal, ModalImg } from './Modal.styled';
import PropTypes from 'prop-types';
ReactModal.setAppElement('#modal-root');

export const Modal = ({ img, modalIsOpen, closeModal }) =>  {
  return (
    <StyledReactModal
      contentLabel="Modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <ModalImg src={img} />
    </StyledReactModal>
  );
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}