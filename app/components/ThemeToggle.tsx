"use client";
import React, { useEffect, useState } from "react";
import { SunIcon } from "@heroicons/react/16/solid";
import { MoonIcon } from "@heroicons/react/16/solid";

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
      className={`cursor-pointer ${className}`}
    >
      {isDarkMode ? <MoonIcon className="w-5" /> : <SunIcon className="w-5" />}
    </button>
  );
}
