import React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
// import ClickBack from "../media/SciFiClick.wav"; // sound is a bit harsh on headset users, find another
import ufoSound from "../media/mixkit-sci-fi-sweep-2522.wav";
import { motion } from "framer-motion";
// start fade in/out page transitions tomorrow :D

// <-------------
// const homeEa = {
//   init: {}, // start from top
//   animateInto: {}, // fly into OG postion[centered below]
//   animateBack: {}, // whileTap shoot off right side of screen
// };
const HomeAnimation = {
  init: {
    rotate: -45,
    x: "-100vw",
    y: "100vw",
  },

  flyIn: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      rotate: { duration: 1 },
      x: { duration: 0.5 },
      y: { duration: 0.5 },
    },
  },

  flyOut: {
    rotate: 90,
    y: "150vh",
    transition: {
      type: "spring",
      stiffness: 200,
      y: {
        delay: 0.4,
      },
      rotate: { duration: 0.2 },
    },
  },
};
const Nav = () => {
  const [play] = useSound(ufoSound);
  ///
  return (
    <motion.div
      className="nav"
      variants={HomeAnimation}
      initial="init"
      animate="flyIn"
      exit="flyOut"
    >
      <Link id="SpaceLink" to="/" onClick={play}>
        Take me back to Earth
      </Link>
    </motion.div>
  );
};

export default Nav;
