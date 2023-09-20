import styled from 'styled-components';


export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalImg = styled.img`
    max-width: calc(100vw - 64px);
    max-height: calc(100vh - 32px);
`;