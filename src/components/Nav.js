import React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import ClickBack from "../media/SciFiClick.wav";
const Nav = () => {
  const [play] = useSound(ClickBack);
  return (
    <div className="nav">
      <Link id="SpaceLink" to="/" onClick={play}>
        Take me back to Earth
      </Link>
    </div>
  );
};

export default Nav;
