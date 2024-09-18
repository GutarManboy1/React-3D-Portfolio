import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space sm:px-10 px-5 gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hey, I am Glenn <span className="waving-hand">✌️</span>a Software
          Engineer from N.Y. <span className="waving-hand">🗽</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient text-sm">Making Awesome Things!!</p>
      </div>
    </section>
  );
};

export default Hero;
