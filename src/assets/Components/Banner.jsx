import coder1 from "../../assets/imgs/coder1.jpg";
import coderr from "../../assets/imgs/coderr.png";
import { useState } from "react";

const Banner = () => {
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const xPercent = (mouseX / width - 0.5) * 40; // 40 is the max tilt angle (can be adjusted)
    const yPercent = (mouseY / height - 0.5) * -40; // -40 to make it tilt in opposite direction on Y axis

    setTransformStyle({
      transform: `perspective(1000px) rotateY(${xPercent}deg) rotateX(${yPercent}deg)`,
    });
  };

  return (
    <div
      className="relative w-full h-[700px] md:h-[600px] lg:h-[700px] overflow-hidden bg-[#F8F9FA]"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 items-center bg-[#F8F9FA] bg-opacity-50 md:flex justify-evenly">
        <div className="items-start px-4 mt-20 space-y-4 text-center text-black">
          <h1 className="text-7xl font-bold md:text-6xl lg:text-8xl">
            We Are Code<span className="text-[#08006E]">X</span>
          </h1>
          <p className="text-sm md:text-lg">
            BUILDING <font color="orange">SOMETHING</font> IS BETTER THAN{" "}
            <font color="orange">DOING</font> NOTHING
          </p>
          <button className="px-6 py-3 text-white transition bg-[#566FFF] rounded-lg shadow-lg hover:bg-blue-700">
            Visit us
          </button>
        </div>
        <div className="relative flex flex-wrap items-center justify-center px-4 mt-5 space-y-4 text-center text-white">
          <img
            src={coder1}
            className="relative inset-0 rounded-lg h-96 w-128"
            style={transformStyle}
          />
          <img
            src={coderr}
            className="absolute inset-0 rounded-lg h-52 w-52 mt-28"
            style={transformStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
