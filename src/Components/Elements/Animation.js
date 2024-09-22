import { TypeAnimation } from "react-type-animation";

const AnimationSkills = () => {
  return (
    <TypeAnimation
        className="font-bold"
        sequence={[
            "Full-stack Applications",
            2000,
            "Backend Servers",
            2000,
            "Frontend Applications",
            2000,
        ]}
        wrapper="span"
        speed={3}
        repeat={Infinity}
    />
  )
}

export default AnimationSkills