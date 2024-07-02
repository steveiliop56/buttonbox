"use client";

import {
  IconBrightnessFilled,
  IconMoonFilled,
  IconSunFilled,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "light" ? (
        <IconMoonFilled color="#171717"></IconMoonFilled>
      ) : (
        <IconSunFilled color="#f5f5f5"></IconSunFilled>
      )}
    </button>
  );
};
