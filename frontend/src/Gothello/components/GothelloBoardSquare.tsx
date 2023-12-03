import styled from "@emotion/styled";
import blackStone from "../../assets/blackStone.svg";
import whiteStone from "../../assets/whiteStone.svg";
import useStoneStore from "../../stores/Stone";

/** css  */
const Button = styled.button`
  background-color: rgba(0, 99, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px black;
  border-radius: 0;
  margin: 0.5px;

  width: ${(props: { size: number }) => props.size}px;
  height: ${(props: { size: number }) => props.size}px;

  &:hover {
    border-color: red;
  }

  .stone {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
/** Props  */
/** Square 상태 종류 :
 * 크기  size
 * 좌표 값 x , y
 * 돌 : 흑돌 or 백돌 or None :  1| 2 | 0
 * 돌을 놓을 수 있는 자리 : Boolean
 *
 */
interface GothelloBoardSquareProps {
  size: number;
  x: number;
  y: number;
  stone: number;
  isCanPut: boolean; // 돌을 둘 수 있는 자리인가?
}

const renderStone = (stone: number) => {
  switch (stone) {
    case 0:
      return null;
    case 1:
      return <img src={blackStone} alt="blackStone" />;
    case 2:
      return <img src={whiteStone} alt="whiteStone" />;
  }
};

const GothelloBoardSquare = ({
  size,
  x,
  y,
  stone,
  isCanPut,
}: GothelloBoardSquareProps) => {
  const { current, setCurrent } = useStoneStore();

  const id = x.toString() + "-" + y.toString();

  // 클릭시 , stone 생성
  const putStone = () => {
    console.log(stone);
    if (isCanPut) {
      // 이 자리에 둘 수 있다면
      stone = current;
      if (stone === 1) {
        setCurrent(2);
      } else {
        setCurrent(1);
      }
      isCanPut = false;
    } else {
      // 이 자리에 둘 수 없다면
      return;
    }
  };

  return (
    <div>
      <Button size={size} onClick={putStone} className={id}>
        <div className="stone">{stone}</div>
      </Button>
    </div>
  );
};

export default GothelloBoardSquare;
