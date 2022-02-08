import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  /* adjust padding and fontsize responsively */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7em;
  height: 100%;
  background: #ffffff;
  color: #333333;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  box-shadow: inset 5px 5px 20px -3px rgba(0, 0, 0, 0.25);
  border-radius: 48px;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  margin: 1em;
`;

export const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
