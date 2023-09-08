"use client";
import React, { useEffect, useState } from "react";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <FaSun className="text-xl cursor-pointer hover:text-amber-500"  onClick={() => setTheme("light")}></FaSun>
      ) : (
        <FaMoon className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("dark")}></FaMoon>
      )}
    </>
  );
}
