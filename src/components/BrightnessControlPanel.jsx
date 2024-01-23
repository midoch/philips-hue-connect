import React, { useState, useEffect } from "react";
import axios from "axios";
import * as api from "../api";

const BrightnessControlPanel = () => {
  // Retrieve the saved brightness from localStorage, default to 100 if not present
  const savedBrightness =
    parseInt(localStorage.getItem("brightness"), 10) || 100;

  const [brightness, setBrightness] = useState(savedBrightness);

  const handleBrightnessChange = async (event) => {
    const newBrightness = parseInt(event.target.value, 10);
    setBrightness(newBrightness);

    const lampId = 55; // Update with your lamp ID

    // Construct the payload for changing the light state
    const payload = {
      on: true,
      bri: newBrightness,
    };

    try {
      // Send a PUT request to update the light state
      await api.updateLampState(lampId, payload);

      // Save the new brightness level to localStorage
      localStorage.setItem("brightness", newBrightness.toString());

      console.log("Brightness updated successfully");
    } catch (error) {
      console.error("Error updating brightness:", error);
    }
  };

  return (
    <div className="mt-4 mb-12">
      <label className="block text-2xl font-medium text-white">
        Brightness
      </label>
      <div className="mt-2">
        <input
          type="range"
          min="1"
          max="254"
          step="1"
          value={brightness}
          onChange={handleBrightnessChange}
          className="w-full h-2 bg-gray-300 rounded"
        />
      </div>
      <p className="mt-2 text-sm text-gray-300">
        Current Brightness: {brightness}
      </p>
    </div>
  );
};

export default BrightnessControlPanel;
