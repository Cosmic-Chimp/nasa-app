import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ufoSound from "../media/mixkit-sci-fi-sweep-2522.wav";
import useSound from "use-sound";
import UAP from "../media/mixkit-technological-futuristic-hum-2133.wav"; // cut this sound a bit shorter
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
};
const Home = () => {
  const [play] = useSound(ufoSound);
  return (
    <>
      <div className="homeDiv">
        {/* <AnimatePresence> */}
        <motion.div variants={newAnima} exit="fastAfBoi">
          <Link id="SpaceLink" to="/nasapic" onClick={play}>
            Take me to space!
          </Link>
        </motion.div>
        {/* </AnimatePresence> */}
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
    </>
  );
};

export default Home;
