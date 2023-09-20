import ReactModal from 'react-modal'; 
import { ModalWrapper, ModalImg } from './Modal.styled';
import PropTypes from 'prop-types';
ReactModal.setAppElement('#modal-root');

export const Modal = ({ img, modalIsOpen, onBackdropeClick, closeModal }) =>  {
  return (
    <ReactModal
      contentLabel="Modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <ModalWrapper onClick={onBackdropeClick}>
        <ModalImg src={img} />
      </ModalWrapper>
    </ReactModal>
    )
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  onBackdropeClick: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
}