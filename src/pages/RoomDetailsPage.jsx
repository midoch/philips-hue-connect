import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ColorControlPanel from "../components/ColorControlPanel";
import BrightnessControlPanel from "../components/BrightnessControlPanel";
import ScenesControlPanel from "../components/ScenesControlPanel";

const RoomDetailsPage = () => {
  const { roomName, lights } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <header className="p-4">
        <h1 className="text-2xl font-semibold">{roomName}</h1>
        <p className="text-2xl font-semibold">{lights}</p>
      </header>
      <main className="p-4">
        <BrightnessControlPanel />
        <ColorControlPanel />
        <ScenesControlPanel />
      </main>
      <Footer />
    </div>
  );
};

export default RoomDetailsPage;
