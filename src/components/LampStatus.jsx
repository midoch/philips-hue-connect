import React, { useEffect, useState } from "react";
import * as api from "../api";

const LampStatus = () => {
  const [lampState, setLampState] = useState(null);

  useEffect(() => {
    const fetchLampData = async () => {
      try {
        // Assuming lamp ID is 6, update it as needed
        const lampId = 6;
        const lampData = await api.fetchLampState(lampId);
        setLampState(lampData.state);
      } catch (error) {
        console.error("Error fetching lamp state:", error);
      }
    };

    fetchLampData();
  }, []);

  const getRGBColor = (xy) => {
    // Convert XY coordinates to RGB color
    // This is a simplified conversion, you might need a more accurate implementation
    const [x, y] = xy;
    const z = 1.0 - x - y;
    const Y = 1.0; // Brightness
    const X = (Y / y) * x;
    const Z = (Y / y) * z;

    // Convert to RGB
    let r = X * 1.656492 - Y * 0.354851 - Z * 0.255038;
    let g = -X * 0.707196 + Y * 1.655397 + Z * 0.036152;
    let b = X * 0.051713 - Y * 0.121364 + Z * 1.01153;

    // Clip values to valid range (0 - 1)
    r = Math.max(0, Math.min(r, 1));
    g = Math.max(0, Math.min(g, 1));
    b = Math.max(0, Math.min(b, 1));

    // Convert to 8-bit values (0 - 255)
    const red = Math.round(r * 255);
    const green = Math.round(g * 255);
    const blue = Math.round(b * 255);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div>
      <h2>Lamp Status</h2>
      {lampState && (
        <>
          <p>Is On: {lampState.on ? "Yes" : "No"}</p>
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: getRGBColor(lampState.xy),
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default LampStatus;
