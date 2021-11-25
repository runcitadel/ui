import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "../form/Button";
import { styled } from "../../styles/stitches.config";

const SunIcon = styled(FaSun, {
  size: "$6",
  verticalAlign: "center",
  color: "$lightning",
});

const MoonIcon = styled(FaMoon, {
  size: "$6",
  verticalAlign: "center",
  color: "$lightning",
});

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(targetTheme);
  };

  return (
    <Button
      aria-label="switch color mode"
      onClick={toggleTheme}
      css={{ p: "$2" }}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
