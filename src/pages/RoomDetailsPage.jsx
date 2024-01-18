import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ColorControlPanel from "../components/ColorControlPanel";
import BrightnessControlPanel from "../components/BrightnessControlPanel";
import ScenesControlPanel from "../components/ScenesControlPanel";
import RoomHeader from "../components/RoomHeader";
import * as api from "../api"; // Import all API functions

const RoomDetailsPage = () => {
  const { roomName, lights } = useParams();
  const [lampState, setLampState] = useState({ color: "red" }); // Initial state or default color

  useEffect(() => {
    const fetchLampData = async () => {
      try {
        const data = await api.fetchLampState(6); // Example: fetch lamp state for lamp ID 6
        setLampState(data);
      } catch (error) {
        console.error("Error fetching lamp state:", error);
      }
    };

    fetchLampData();
  }, [lampState.color]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <main className="p-4">
        <RoomHeader
          roomName={roomName}
          numberOfLights={lights}
          lightColor={lampState.color}
        />
        <BrightnessControlPanel />
        <ColorControlPanel />
        <ScenesControlPanel />
      </main>
      <Footer />
    </div>
  );
};

export default RoomDetailsPage;
