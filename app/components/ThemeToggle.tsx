"use client";
import React, { useEffect, useState } from "react";

export default function LightDarkModeToggle({
  className,
}: {
  className: string;
}) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
  }, []);

  useEffect(() => {
    console.log(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`p-2 bg-gray-200 text-black rounded-md ${className}`}
    >
      {isDarkMode ? "light" : "dark"}
    </button>
  );
}
