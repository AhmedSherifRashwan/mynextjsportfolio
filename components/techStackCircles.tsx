import OrbitingCircles from "@/components/ui/OrbitingCircles";
import { 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaWindows, 
  FaGithub, 
  FaLinux, 
  FaDatabase
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export function OrbitingCirclesTechStack() {
  return (
    <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        My Tech Stack
      </span>

      {/* Inner Circle Ring */}
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={30}
        delay={15}
        radius={100}
      >
        <FaHtml5 size="2em" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={30}
        delay={25}
        radius={100}
      >
        <FaCss3Alt size="2em" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={30}
        delay={40}
        radius={100}
      >
        <FaJsSquare size="2em" />
      </OrbitingCircles>

      {/* Middle Circle Ring */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={40}
        delay={5}
        radius={150}
      >
        <FaJava size="2em" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={40}
        delay={24}
        radius={150}
      >
        <FaPython size="2em" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={40}
        delay={20}
        radius={150}
      >
        <FaLinux size="2em" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={40}
        delay={30}
        radius={150}
      >
        <FaWindows size="2em" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={40}
        delay={40}
        radius={150}
      >
        <FaDatabase size="2em" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={40}
        delay={50}
        radius={150}
      >
        <FaGithub size="2em" />
      </OrbitingCircles>

      {/* Outer Circle Ring */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={50}
        delay={0}
        reverse
      >
        <FontAwesomeIcon icon={faFigma} size="2x" /> {/* Figma */}
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={50}
        delay={15}
        reverse
      >
        <FontAwesomeIcon icon={faStackOverflow} size="2x" /> {/* Stack Overflow */}
      </OrbitingCircles>
    </div>
  );
}
