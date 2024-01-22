import React from "react";

const RoomHeader = ({ roomName, lightColor }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">{roomName}</h2>
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
