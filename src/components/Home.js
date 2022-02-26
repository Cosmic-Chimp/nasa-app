import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ufoSound from "../media/mixkit-sci-fi-sweep-2522.wav";
import useSound from "use-sound";
// import UAP from "../media/mixkit-technological-futuristic-hum-2133.wav"; // cut this sound a bit shorter

const newAnima = {
  fastAfBoi: {
    rotate: -90, //[0,-45,-90],
    y: "-100vh",
    transition: {
      y: {
        delay: 0.4,
      },
      rotate: { duration: 0.2 },
    },
  },
  // above is onClick animation
  // below is the animation on page load

  init: {
    rotate: 90,
    y: "-100vw",
  },
  animateIN: {
    y: 0,
    rotate: 0,
    transition: {
      rotate: { delay: 1, duration: 0.5 },
      y: {
        duration: 1,
      }, //when calling duration we auto declare this animation as tween
      type: "tween",
    },
  },
};

const Home = () => {
  const [play] = useSound(ufoSound);
  return (
    <motion.div>
      <div className="homeDiv">
        <motion.div
          variants={newAnima}
          initial="init"
          animate="animateIN"
          exit="fastAfBoi"
        >
          <Link id="SpaceLink" to="/nasapic" onClick={play}>
            Take me to space!
          </Link>
        </motion.div>
      </div>
      <p className="shoutOut">
        Background Photo by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/@lukaszlada?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Łukasz Łada
        </a>{" "}
        on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </p>
    </motion.div>
  );
};

export default Home;
