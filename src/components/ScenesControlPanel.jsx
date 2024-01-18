import React, { useState } from "react";
import axios from "axios";
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

  const scenes = [
    {
      icon: <HiOutlineLightBulb className="text-3xl" />,
      text: "Birthday",
      color: "bg-[#FF9B9B]",
    },
    {
      icon: <HiOutlineLightBulb className="text-3xl" />,
      text: "Party",
      color: "bg-[#A693EB]",
    },
    {
      icon: <HiOutlineLightBulb className="text-3xl" />,
      text: "Relax",
      color: "bg-[#93CAEB]",
    },
    {
      icon: <HiOutlineLightBulb className="text-3xl" />,
      text: "Fun",
      color: "bg-[#89DD94]",
    },
  ];

  const handleSceneClick = (scene) => {
    setSelectedScene(scene);

    const lightStateEndpoint =
      "http://192.168.8.100/api/CaPeQqc2vC7aIo7VX5xfPKx1n6ZMv-BOmk4RV1VW/lights/6/state";

    // Construct the payload for changing the light state
    const payload = {
      on: true,
      xy: [scene.icon.props.color[0], scene.icon.props.color[1]],
    };

    // Send a PUT request to update the light state
    axios
      .put(lightStateEndpoint, payload)
      .then((response) => {
        console.log("Color scene updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating color scene:", error);
      });
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
