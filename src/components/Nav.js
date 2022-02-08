import React from "react";
// import { Link } from "react-router-dom";
import { NavLink, OuterDiv } from "../styledComps/NavStyled";
const Nav = () => {
  return (
    <OuterDiv>
      <NavLink to="/">Take me back to Earth</NavLink>
    </OuterDiv>
  );
};

export default Nav;
