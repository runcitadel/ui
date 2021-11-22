import Image from "next/image";
import { styled } from "../../styles/stitches.config";
import { ToggleButton } from "../form/ToggleButton";

const NavDrawerBase = styled(ToggleButton, {
  borderRadius: "$round",
  backgroundColor: "$clear",
  position: "fixed",
  bottom: 100,
  right: 100,
});

export const NavDrawerToggle = () => {
  return (
    <NavDrawerBase aria-label="open navigation menu">
      <Image src="/logo.svg" height={100} width={100} />
    </NavDrawerBase>
  );
};
