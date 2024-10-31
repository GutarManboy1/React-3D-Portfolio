import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space sm:px-10 px-5 gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hey, I am Glenn <span className="waving-hand">✌️</span>a Software
          Engineer from NYC<span className="waving-hand">🗽</span> in JPN{" "}
          <span className="waving-hand">🎌</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient text-sm">
          I Make Awesome Things<span className="waving-hand">🤩</span>{" "}!
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
