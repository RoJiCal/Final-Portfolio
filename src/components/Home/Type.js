
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Junior Web-Developer",
          "I'm an artist...",
          "I paint with CSS, I communicate with HTML, I build, with JavaScript",
         

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
