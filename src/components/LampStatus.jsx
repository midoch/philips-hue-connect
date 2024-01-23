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
        console.log("Fetched lamp data:", lampData);
      } catch (error) {
        console.error("Error fetching lamp state:", error);
      }
    };

    fetchLampData();
  }, []);

  return (
    <div>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: lampState
            ? `rgb(${Math.floor(lampState.xy[0] * 255)}, ${Math.floor(
                lampState.xy[1] * 255
              )}, 128)`
            : "transparent",
        }}
      ></div>
      {lampState && (
        <>
          <p>Is On: {lampState.on ? "Yes" : "No"}</p>
          {lampState.xy && (
            <>
              <p>Color: {JSON.stringify(lampState.xy)}</p>
            </>
          )}
          {/* Add more lamp state details as needed */}
        </>
      )}
    </div>
  );
};

export default LampStatus;
