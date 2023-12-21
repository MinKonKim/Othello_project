import React, { useState } from "react";
import styled from "@emotion/styled";

//#region  CSS
const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #2196f3; /* Toggle ON color */
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const ToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc; /* Toggle OFF color */
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
//#endregion
/**
 * 설정에서 정해져야 하는 것
 *
 * 1. 타이머  : 스트리머 타이머 , 시청자 타이머 각각 따로
 *    - 최소 10초 부터 60초 까지
 * 2. 순서 변경 : 선돌이 흑, 후돌이 백 이기 때문에
 *    - 누가 흑돌을 할지 정해야한다.
 * 3. (굳이 안해도 되는 것) 보드판 색변경
 *
 * 4.
 *
 *
 */
const SettingMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <ToggleSwitchWrapper>
      <ToggleSwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <ToggleSwitchSlider />
    </ToggleSwitchWrapper>
  );
};

export default SettingMenu;
