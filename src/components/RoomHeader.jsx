import React from "react";
import LampStatus from "./LampStatus";

const RoomHeader = ({ roomName }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">{roomName}</h2>
      </div>
    </div>
  );
};

export default RoomHeader;
