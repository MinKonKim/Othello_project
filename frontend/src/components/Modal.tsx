import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBoardStore from "../stores/useBoardStore";

//#region CSS
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideUp = keyframes`
  from { transform: translateY(-100px); }
  to { transform: translateY(0px); }
`;

const slideDown = keyframes`
  from { transform: translateY(0px); }
  to { transform: translateY(-100px); }
`;

const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.25s ease-out
    forwards;
  display: flex;
  justify-content: center;
  align-items: center;

  &.open {
    animation-name: ${fadeIn};
  }
`;

const Section = styled.section`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  overflow: hidden;
  animation: ${slideDown} 0.25s ease-out forwards;

  & > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;

    & > button {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 30px;
      font-size: 21px;
      font-weight: 700;
      text-align: center;
      color: #999;
      background-color: transparent;
    }
  }

  & > main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
    text-align: center;
  }

  & > footer {
    padding: 12px 16px;
    text-align: center;

    & > button {
      padding: 6px 10rem;
      color: #fff;
      background-color: #6c757d;
      border-radius: 5px;
      font-size: 13px;
    }
  }
`;
export { Modal, Section };
//#endregion

interface ModalProps {
  blackStone: number;
  whiteStone: number;
}

const ModalSection = ({ blackStone, whiteStone }: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState("");

  const { resetBoard } = useBoardStore();
  const toggleModal = () => {
    setShowModal((prev) => !prev);
    resetBoard();
  };
  const WhoIsWinner = () => {
    setShowModal(true);
    if (blackStone > whiteStone) setWinner("Black");
    else if (whiteStone < blackStone) setWinner("White");
    else setWinner("무승부");
  };

  useEffect(() => {
    if (blackStone + whiteStone === 64) {
      WhoIsWinner();
    }
  }, [blackStone, whiteStone]);

  return (
    <div>
      <button onClick={WhoIsWinner}>Show Modal</button>
      {showModal && (
        <Modal show={showModal} onClick={toggleModal}>
          <Section>
            <header></header>
            <main>
              <h1>Winner : {winner}</h1>
              <p>Click the button to restart</p>
            </main>
            <footer>
              <Link to="/">
                <button onClick={toggleModal}>재시작</button>
              </Link>
            </footer>
          </Section>
        </Modal>
      )}
    </div>
  );
};

export default ModalSection;
