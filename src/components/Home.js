import React from "react";
import { Link } from "react-router-dom";
// import { BodyDiv, SpaceLink } from "../styledComps/HomeStyled";
const Home = () => {
  return (
    <>
      <div className="homeDiv">
        <Link id="SpaceLink" to="/nasapic">
          Take me to space!
        </Link>
      </div>
      <p className="shoutOut">
        Background-Photo by{" "}
        <a href="https://unsplash.com/@lukaszlada?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Łukasz Łada
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </>
  );
};

export default Home;
