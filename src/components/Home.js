import React from "react";
import { Link } from "react-router-dom";
import { BodyDiv } from "../styledComps/HomeStyled";
const Home = () => {
  return (
    <>
      <Link to="/nasapic">Take me to space!</Link>
    </>
  );
};

export default Home;
