import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import FiltersSidebar from "./FiltersSidebar/FiltersSidebar";
import ButtonHideFilters from "./ButtonHideFilters";
import { SideBar } from "searchkit";

// services
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../services/GlobalContext";

// images
import IconHide from "../img/hide";

const ButtonRoundedBtn = styled.button`
  width: max-content;
  border-radius: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-left: 31px;
  margin-bottom: 65px;
  height: 36px;
  padding: 7px 9px 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.21);
  background-color: var(--ocean-blue);
  border: none;
  &:focus {
    outline: none;
  }
`;
const Value = styled.div`
  color: #ffffff;
  font-size: 1.4rem;
  margin-left: 7px;
`;

const Icon = styled.img`
  width: 21px;
  height: 21px;
  margin: 0 7px 0 0;
  object-fit: contain;
`;

const Sidebar = () => {
  // context
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  // useEffect(() => {
  //   dispatch({ type: "SET_DEFAULT" });
  // }, [dispatch]);

  console.log(state);
  return (
    <SideBar className={state.show ? "sidebar" : "sidebar sidebar__hide"}>
      <img
        className={state.show ? "logo" : "logo logo__hide"}
        src="lh_logo.png"
        widht="30"
        height="60"
      ></img>
      <ButtonRoundedBtn onClick={() => dispatch({ type: "SET_SHOW" })}>
        <IconHide width="25px" height="24px" color="#fff"></IconHide>
        <Value style={{ display: !state.show ? "none" : "" }}>
          Hide filter
        </Value>
      </ButtonRoundedBtn>

      <FiltersSidebar showing={state.show}></FiltersSidebar>
    </SideBar>
  );
};

export default Sidebar;
