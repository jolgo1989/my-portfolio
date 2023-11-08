import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    // <div className="typing">
    <TypeAnimation
      sequence={[
        // https://react-type-animation.netlify.app/examples
        "Teacher",
        2000,
        "Developer",
        2000,
      ]}
      speed={40}
      style={{ color: "#0564bd" }}
      repeat={Infinity}
    />
    // </div>
  );
};

export default TypingAnimation;
