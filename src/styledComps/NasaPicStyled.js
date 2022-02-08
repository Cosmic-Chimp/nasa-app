import styled from "styled-components";

export const OuterDiv = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  /* flex-direction: column; */
  /* background: #333333; */
  /* height: 100%; */
  /* width: 100vw; */
  background-image: url("./abstracts//spaceBG.png");

  background-color: black;
  height: fit-content;
  width: 100vw;
  /* //if on certain screen sizes change flex-direction */
`;

export const ImgDiv = styled.div`
  flex: 1;
  align-self: center;
`;
export const InfoDiv = styled.div`
  flex: 1;
  padding: 1em;
`;
