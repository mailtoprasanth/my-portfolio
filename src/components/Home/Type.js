import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  var role = [
    "UI Developer",
    "Frontend developer",
    "Angular Developer",
  ]
  return (
    <Typewriter
      options={{
        strings:role,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
