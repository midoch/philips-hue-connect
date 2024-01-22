import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";

const RoomPanel = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRoomsData = async () => {
      try {
        const roomData = await api.fetchRooms();
        const roomsArray = Object.keys(roomData).map((roomId) => ({
          roomId,
          name: roomData[roomId].name,
          lights: roomData[roomId].lights.length,
        }));
        setRooms(roomsArray);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRoomsData();
  }, []);

  return (
    <main className="flex justify-center items-center pt-12 p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <Link key={room.roomId} to={`/room/${room.name.toLowerCase()}`}>
            <div className="bg-gray-200 p-2 rounded-2xl w-40 h-40 flex flex-col justify-center items-center">
              <div className="text-black pr-16">
                <img src={room.icon} alt={room.name} />
              </div>
              <div className="pr-4 pt-4">
                <h2 className="text-black text-xl font-semibold">
                  {room.name}
                </h2>
                <h3 className="text-orange-400 font-semibold">
                  Lights: {room.lights}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default RoomPanel;
