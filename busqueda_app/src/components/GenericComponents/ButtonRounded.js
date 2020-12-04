import React, { useContext } from "react";
import styled from "styled-components";

// services
import { GlobalStateContext } from "../../services/GlobalContext";

const ButtonRoundedBtn = styled.button`
  width: max-content;
  padding: ${({ padding }) => padding};
  border-radius: 1.8rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.21);
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  cursor: pointer;
  margin-left: ${({ margin }) => margin};
`;
const Value = styled.div`
  color: #ffffff;
  font-size: 1.4rem;
`;

const Icon = styled.img`
  height: 1.5rem;
  margin-right: ${({ margin }) => margin};
  margin-bottom: 0;
`;

const ButtonRounded = ({ icon, value, classHide, handleClick, showing }) => {
  // context
  const state = useContext(GlobalStateContext);
  const hide = state.show ? "" : "btn_hide_show";
  return (
    <ButtonRoundedBtn
      margin={showing ? "3.8rem" : "calc(4.5vw - 20px)"}
      padding={showing ? "0.7rem 1rem" : "1rem"}
      justifyContent={showing ? "space-around" : "center"}
      className={[classHide, hide]}
    >
      <Icon src={icon} margin={showing ? "1.1rem" : "0"} />
      <Value>{showing ? value : ""}</Value>
    </ButtonRoundedBtn>
  );
};

export default ButtonRounded;
