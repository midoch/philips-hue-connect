import React, { useState, useEffect } from "react";
import axios from "axios";
import * as api from "../api"; // Import API functions
import { HiOutlineLightBulb } from "react-icons/hi";

const Scene = ({ icon, text, color, onClick, isSelected }) => (
  <div
    className={`rounded-2xl p-5 text-white cursor-pointer ${color} ${
      isSelected ? "bg-blue-200" : ""
    }`}
    onClick={onClick}
  >
    <div className="flex items-center">
      <div className="mr-4">{icon}</div>
      <div>{text}</div>
    </div>
  </div>
);

const ScenesControlPanel = () => {
  const [selectedScene, setSelectedScene] = useState(null);

  useEffect(() => {
    // Fetch the initial lamp state
    fetchLampState();
  }, []);

  const fetchLampState = async () => {
    try {
      const lampId = 55; // Update with your lamp ID
      const response = await api.fetchLampState(lampId);
      setSelectedScene(findMatchingScene(response.data.xy));
    } catch (error) {
      console.error("Error fetching lamp state:", error);
    }
  };

  const findMatchingScene = (xy) => {
    return scenes.find(
      (scene) =>
        scene.icon.props.color[0] === xy[0] &&
        scene.icon.props.color[1] === xy[1]
    );
  };

  const scenes = [
    {
      icon: <HiOutlineLightBulb className="text-3xl" color={[0.675, 0.322]} />,
      text: "Birthday",
      color: "bg-[#FF9B9B]",
    },
    {
      icon: <HiOutlineLightBulb className="text-3xl" color={[0.408, 0.517]} />,
      text: "Party",
      color: "bg-[#A693EB]",
    },
    {
      icon: <HiOutlineLightBulb className="text-3xl" color={[0.443, 0.502]} />,
      text: "Relax",
      color: "bg-[#93CAEB]",
    },
    {
      icon: <HiOutlineLightBulb className="text-3xl" color={[0.28, 0.15]} />,
      text: "Fun",
      color: "bg-[#89DD94]",
    },
  ];

  const handleSceneClick = async (scene) => {
    setSelectedScene(scene);

    const lampId = 55; // Update with your lamp ID

    // Construct the payload for changing the light state
    const payload = {
      on: true,
      xy: [scene.icon.props.color[0], scene.icon.props.color[1]],
    };

    try {
      // Send a PUT request to update the light state
      await api.updateLampState(lampId, payload);
      console.log("Color scene updated successfully");
    } catch (error) {
      console.error("Error updating color scene:", error);
    }
  };

  return (
    <div className="mt-4">
      <label className="block text-2xl font-medium text-white">Scenes</label>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {scenes.map((scene, index) => (
          <Scene
            key={index}
            icon={scene.icon}
            text={scene.text}
            color={scene.color}
            onClick={() => handleSceneClick(scene)}
            isSelected={selectedScene === scene}
          />
        ))}
      </div>
    </div>
  );
};

export default ScenesControlPanel;
