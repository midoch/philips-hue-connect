import React from "react";
import { Link } from "react-router-dom";
import {
  FaBed,
  FaCouch,
  FaUtensils,
  FaBath,
  FaTree,
  FaGlobe,
} from "react-icons/fa";

const Room = ({ name, lights, icon: Icon }) => (
  <Link to={`/room/${name.toLowerCase()}`}>
    <div className="bg-gray-200 p-2 rounded-2xl w-40 h-40 flex flex-col justify-center items-center">
      {/* Room content */}
      <div className="text-black pr-16">
        <Icon size={48} />
      </div>
      <div className="pr-4 pt-4">
        <h2 className="text-black text-xl font-semibold">{name}</h2>
        <h3 className="text-orange-400 font-semibold">Lights: {lights}</h3>
      </div>
    </div>
  </Link>
);

const RoomPanel = () => {
  return (
    <main className="flex justify-center items-center pt-12 p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* Room 1 */}
        <Room name="Bedroom" lights={4} icon={FaBed} />

        {/* Room 2 */}
        <Room name="Living Room" lights={2} icon={FaCouch} />

        {/* Room 3 */}
        <Room name="Kitchen" lights={5} icon={FaUtensils} />

        {/* Room 4 */}
        <Room name="Bathroom" lights={1} icon={FaBath} />

        {/* Room 5 */}
        <Room name="Outdoor" lights={5} icon={FaTree} />

        {/* Room 6 */}
        <Room name="Balcony" lights={2} icon={FaGlobe} />
      </div>
    </main>
  );
};

export default RoomPanel;
