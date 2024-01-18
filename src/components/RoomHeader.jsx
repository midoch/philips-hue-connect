import React from "react";

const RoomHeader = ({ roomName, numberOfLights, lightColor }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">{roomName}</h2>
        <span className="ml-4">Lights: {numberOfLights}</span>
      </div>
      <div className="flex items-center">
        <div
          className="w-6 h-6 rounded-full mr-2"
          style={{ backgroundColor: lightColor }}
        ></div>
        <span>{lightColor}</span>
      </div>
    </div>
  );
};

export default RoomHeader;
