import React, { FC } from "react";

export const NavBar: FC = () => {
  return (
    <nav className="w-screen bg-pink-dark">
      <h2 className="px-6 py-2 text-4xl font-black text-white">
        <span className="text-white">A</span>ni
        <span className="text-white">T</span>imeline
      </h2>
    </nav>
  );
};
