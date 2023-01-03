import React from "react";
import TagOne from "../components/TagOne";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import About from "../components/About";
import Teamboard from "../components/Teamboard";
const Home = () => {
  return (
    <>
    <div className="tag">
      <div className="first"><TagOne /></div>
      <div className="two"><Player
        autoplay
        loop
        background="transparent"
        src="https://assets8.lottiefiles.com/packages/lf20_CcVMoJ.json"
        style={{ height: '25vw', width: '25vw' }
        }
      >
      </Player></div>
    </div>
    <div className="about">
        <About/>
    </div>
    <Teamboard/>
    </>
  );
};

export default Home;