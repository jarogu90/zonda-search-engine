import React, { Component } from "react";
import styled from "styled-components";
import FiltersSidebar from "./FiltersSidebar/FiltersSidebar";
import ButtonHideFilters from "./ButtonHideFilters";
import { SideBar } from "searchkit";

class Sidebar extends Component {
  state = { showing: true };
  render() {
    const { showing } = this.state;
    return (
      <SideBar className={showing ? "sidebar" : "sidebar sidebar__hide"}>
        <img
          className={showing ? "logo" : " logo logo__hide"}
          src="lh_logo.png"
          widht="30"
          height="60"
        ></img>
        <ButtonHideFilters
          onClick={() => this.setState({ showing: !showing })}
        ></ButtonHideFilters>
        <button onClick={() => this.setState({ showing: !showing })}>
          hide
        </button>
        <FiltersSidebar showing={this.state.showing}></FiltersSidebar>
      </SideBar>
    );
  }
}

export default Sidebar;
