import { useColorMode } from "@theme-ui/color-modes";
import { IconButton } from "@theme-ui/components";
import { FaMoon, FaSun } from "react-icons/fa";
import dynamic from "next/dynamic";

export default function ColorModeToggle() {
  const [colorMode, setColorMode] = useColorMode();
  const handleColorToggle = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  return (
    <IconButton
      variant="darkModeToggle"
      aria-label="Toggle dark mode"
      onClick={handleColorToggle}
    >
      {colorMode === "dark" ? <FaMoon /> : <FaSun />}
    </IconButton>
  );
}
