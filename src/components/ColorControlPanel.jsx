import React, { useState } from "react";
import axios from "axios";
import * as api from "../api"; // Import API functions

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

  const changeColor = async (color) => {
    const lampId = 6; // Update with your lamp ID

    const payload = {
      on: isOn,
      xy: colorCodes[color],
    };

    try {
      const currentLampState = await api.fetchLampState(lampId);
      setIsOn(currentLampState.on);

      await api.updateLampState(lampId, payload);
      console.log("Light state updated successfully");
    } catch (error) {
      console.error("Error updating light state:", error);
    }
  };

  const handleToggle = async () => {
    const lampId = 6; // Update with your lamp ID

    const payload = {
      on: !isOn,
    };

    try {
      await api.updateLampState(lampId, payload);
      setIsOn((prevIsOn) => !prevIsOn);
      console.log("Light state updated successfully");
    } catch (error) {
      console.error("Error updating light state:", error);
    }
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
