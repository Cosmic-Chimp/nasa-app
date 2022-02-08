import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.5em;
  height: 100%;
  cursor: pointer;
  font-size: 1.3rem;
  background: linear-gradient(90deg, #773876 2.98%, #8249a7 97.68%);
  border: 1.5px solid #cb748f;
  border-radius: 16px;
`;

export const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
