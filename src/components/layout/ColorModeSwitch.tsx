import { useColorMode } from "@theme-ui/color-modes";
import { IconButton } from "@theme-ui/components";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ColorModeToggle() {
  const [colorMode, setColorMode] = useColorMode();
  const handleColorToggle = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  return (
    <IconButton
      variant="icon"
      aria-label="Toggle dark mode"
      onClick={handleColorToggle}
      sx={{ pointer: "cursor" }}
    >
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </IconButton>
  );
}
