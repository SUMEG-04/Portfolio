import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Set a z-index lower than your modal */
  pointer-events: ${props => (props.showoverlay ? 'auto' : 'none')};
`;

const ConfirmationModalWrapper = styled.div`
  background-color: ${({ theme }) => theme[theme.mode].background};
  position: fixed;
  color: ${({ theme }) => theme[theme.mode].text};
  border-radius: 8px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.7);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 1000;

  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const ConfirmationModal = ({ showConfirmation, onConfirm, onCancel }) => {
  const { theme } = useTheme();

  return (
    <>
      {showConfirmation && (
        <>
          <Overlay $showoverlay={showConfirmation} />
          <ConfirmationModalWrapper theme={theme}>
            <p>Are you sure you want to delete this project?</p>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
          </ConfirmationModalWrapper>
        </>
      )}
    </>
  );
};


export default ConfirmationModal;
