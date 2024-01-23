// ColorControlPanel.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import * as api from "../api";

const ColorControlPanel = () => {
  const [isOn, setIsOn] = useState(false);
  const [currentColor, setCurrentColor] = useState("white"); // Default color

  // Define the Philips Hue color codes
  const colorCodes = {
    red: [0.675, 0.322],
    green: [0.408, 0.517],
    blue: [0.17, 0.67],
    yellow: [0.443, 0.502],
    purple: [0.28, 0.15],
    orange: [0.56, 0.404],
  };

  const fetchCurrentColor = async () => {
    const lampId = 55; // Update with your lamp ID
    try {
      const lampDetails = await api.fetchLampDetails(lampId);
      setCurrentColor(getColorFromXY(lampDetails.state.xy));
      setIsOn(lampDetails.state.on);
    } catch (error) {
      console.error("Error fetching lamp details:", error);
    }
  };

  useEffect(() => {
    fetchCurrentColor();
  }, []);

  const getColorFromXY = (xy) => {
    // Implement logic to determine color based on xy values
    // For simplicity, returning a default color "white"
    return "white";
  };

  const changeColor = async (color) => {
    const lampId = 55; // Update with your lamp ID

    // Construct the payload for changing the light state
    const payload = {
      on: isOn,
      xy: colorCodes[color],
    };

    try {
      // Send a PUT request to update the light state
      await api.updateLampState(lampId, payload);
      fetchCurrentColor(); // Update the current color after changing
      console.log("Light state updated successfully");
    } catch (error) {
      console.error("Error updating light state:", error);
    }
  };

  const handleToggle = async () => {
    const lampId = 55; // Update with your lamp ID

    // Construct the payload for changing the light state
    const payload = {
      on: !isOn,
    };

    try {
      // Send a PUT request to update the light state
      await api.updateLampState(lampId, payload);
      fetchCurrentColor(); // Update the current color after changing
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
            isOn ? "bg-red-500" : "bg-green-500"
          } rounded cursor-pointer`}
        >
          {isOn ? "Off" : "On"}
        </button>
      </div>
    </div>
  );
};

export default ColorControlPanel;
