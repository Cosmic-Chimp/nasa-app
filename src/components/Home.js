import React from "react";
// import { Link } from "react-router-dom";
import { BodyDiv, SpaceLink } from "../styledComps/HomeStyled";
const Home = () => {
  return (
    <BodyDiv>
      <SpaceLink to="/nasapic">Take me to space!</SpaceLink>
      {/* change above link el to a custom styled component */}
    </BodyDiv>
  );
};

export default Home;
