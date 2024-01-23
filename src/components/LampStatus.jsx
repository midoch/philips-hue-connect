import React, { useEffect, useState } from "react";
import * as api from "../api";

const LampStatus = () => {
  const [lampState, setLampState] = useState(null);

  useEffect(() => {
    const fetchLampData = async () => {
      try {
        // Assuming lamp ID is 6, update it as needed
        const lampId = 55;
        const lampData = await api.fetchLampState(lampId);
        setLampState(lampData);
        console.log("Fetched lamp data:", lampData);
      } catch (error) {
        console.error("Error fetching lamp state:", error);
      }
    };

    fetchLampData();
  }, []);

  return (
    <div>
      <h2>Lamp Status</h2>
      {lampState && (
        <>
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: `rgb(${Math.round(
                lampState.xy[0] * 255
              )},${Math.round(lampState.xy[1] * 255)},0)`,
            }}
          ></div>
          <p>Is On: {lampState.on ? "Yes" : "No"}</p>
          <p>Color: {JSON.stringify(lampState.xy)}</p>
        </>
      )}
    </div>
  );
};

export default LampStatus;
