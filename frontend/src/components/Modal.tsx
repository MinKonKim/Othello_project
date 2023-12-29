import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
// import { useState } from "react";
import { Link } from "react-router-dom";
import useBoardStore from "../stores/useBoardStore";
import useStoneStore from "../stores/useStoneStore";

//#region CSS
const color = "#e3c39a";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// const slideUp = keyframes`
//   from { transform: translateY(-100px); }
//   to { transform: translateY(0px); }
// `;

const slideDown = keyframes`
  from { transform: translateY(0px); }
  to { transform: translateY(-100px); }
`;

const ModalWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.4s ease-out
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
const FifthButton = styled.button`
  border-color: ${color};
  border-radius: 5px;
  color: ${color};
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  width: 15rem;
  height: 5rem;
  font-size: 20px;
  font-weight: 700;

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: ${color};
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  &:hover {
    color: #fff;
    &:after {
      width: 110%;
    }
  }
`;

export { ModalWrapper, Section };
//#endregion
interface ModalProps {
  showModal: boolean;
}

const ModalSection = ({ showModal }: ModalProps) => {
  const { blackStone, whiteStone } = useStoneStore();
  /* const [showModal, setShowModal] = useState(false); */

  const { resetBoard } = useBoardStore();
  const toggleModal = () => {
    /* setShowModal((prev) => !prev); */
    resetBoard();
  };

  return (
    <div>
      {/* <button onClick={WhoIsWinner}>Show Modal</button> */}
      {showModal && (
        <ModalWrapper show={showModal} onClick={toggleModal}>
          <Section>
            <header></header>
            <main>
              {blackStone !== whiteStone ? (
                <h1>Winner : {blackStone > whiteStone ? "Black" : "White"}</h1>
              ) : (
                <h1>~DRAW~</h1>
              )}
              <p>
                Black : {blackStone} White: {whiteStone}
              </p>
            </main>
            <footer>
              <Link to="/">
                <FifthButton onClick={toggleModal}>RESTART</FifthButton>
              </Link>
            </footer>
          </Section>
        </ModalWrapper>
      )}
    </div>
  );
};

export default ModalSection;
