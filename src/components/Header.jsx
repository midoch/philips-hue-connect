import React from "react";

export default function Header() {
  return (
    <header className="bg-[#0A4DA2] text-white py-4 px-4">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold">
          Control <br /> Panel
        </h1>
        <div className="flex items-center">
          <img
            src={
              "https://avatars.githubusercontent.com/u/2059296?s=460&u=3b6e0e4c0d8e5f8e5c3e5f0c6e0b9d7e2d8d9e8f&v=4"
            }
            alt="Profile Picture"
            width={60}
            height={60}
            className="rounded-full object-cover border-4 border-white"
          />
        </div>
      </div>
    </header>
  );
}
