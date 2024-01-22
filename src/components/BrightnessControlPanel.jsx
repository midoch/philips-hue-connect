import React, { useState, useEffect } from "react";
import axios from "axios";
import * as api from "../api";

const BrightnessControlPanel = () => {
  const [brightness, setBrightness] = useState(100); // Default brightness value
  const [lampState, setLampState] = useState({}); // Lamp state

  useEffect(() => {
    // Fetch the initial lamp state
    fetchLampState();
  }, []);

  const fetchLampState = async () => {
    try {
      const lampId = 55; // Update with your lamp ID
      const response = await api.fetchLampState(lampId);
      setLampState(response.data);
      setBrightness(response.data.bri);
    } catch (error) {
      console.error("Error fetching lamp state:", error);
    }
  };

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
