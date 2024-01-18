import React, { useState } from "react";
import axios from "axios";

const BrightnessControlPanel = () => {
  const [brightness, setBrightness] = useState(100); // Default brightness value

  const handleBrightnessChange = (event) => {
    const newBrightness = parseInt(event.target.value, 10);
    setBrightness(newBrightness);

    const lightStateEndpoint =
      "http://192.168.8.100/api/CaPeQqc2vC7aIo7VX5xfPKx1n6ZMv-BOmk4RV1VW/lights/6/state";

    // Construct the payload for changing the light state
    const payload = {
      on: true,
      bri: newBrightness,
    };

    // Send a PUT request to update the light state
    axios
      .put(lightStateEndpoint, payload)
      .then((response) => {
        console.log("Brightness updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating brightness:", error);
      });
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
