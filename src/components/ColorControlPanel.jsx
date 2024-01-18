import React, { useState } from "react";
import axios from "axios";

const ColorControlPanel = () => {
  const [isOn, setIsOn] = useState(false);

  // Define the Philips Hue color codes
  const colorCodes = {
    red: [0.675, 0.322],
    green: [0.408, 0.517],
    blue: [0.17, 0.67],
    yellow: [0.443, 0.502],
    purple: [0.28, 0.15],
    orange: [0.56, 0.404],
  };

  const changeColor = (color) => {
    const lightStateEndpoint =
      "http://192.168.8.100/api/CaPeQqc2vC7aIo7VX5xfPKx1n6ZMv-BOmk4RV1VW/lights/6/state";

    // Construct the payload for changing the light state
    const payload = {
      on: isOn,
      xy: colorCodes[color],
    };

    // Send a PUT request to update the light state
    axios
      .put(lightStateEndpoint, payload)
      .then((response) => {
        console.log("Light state updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating light state:", error);
      });
  };

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold">Color</h3>
      <div className="flex items-center mt-4">
        {Object.keys(colorCodes).map((color) => (
          <div
            key={color}
            className="w-8 h-8 rounded-full mx-2 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => changeColor(color)}
          ></div>
        ))}
        <button
          onClick={handleToggle}
          className={`ml-4 px-4 py-2 text-white ${
            isOn ? "bg-green-500" : "bg-red-500"
          } rounded cursor-pointer`}
        >
          {isOn ? "Off" : "On"}
        </button>
      </div>
    </div>
  );
};

export default ColorControlPanel;
