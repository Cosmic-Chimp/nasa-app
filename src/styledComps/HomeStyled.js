import styled from "styled-components";
import { Link } from "react-router-dom";
export const BodyDiv = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; */
  /* background-color: grey; */
  /* width: 50em;
  height: 100%;
  margin: none; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export const SpaceLink = styled(Link)`
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
