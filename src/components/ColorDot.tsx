"use client";
import React, { useState } from "react";

const ColorDot = ({ color }: { color: string }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      className={`h-4 w-4 rounded-full cursor-pointer ${color} ${
        selected ? "border-2 border-black " : ""
      }`}
    />
  );
};
export default ColorDot;
