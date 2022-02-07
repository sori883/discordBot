import { minecraftUp, handleMinecraftUp } from "commands/minecraftUp";
import { minecraftDown, handleMinecraftDown } from "commands/minecraftDown";

const commands = [
  minecraftUp,
  minecraftDown,
];

const hander = {
  handleMinecraftUp,
  handleMinecraftDown,
};

export {
  commands,
  hander
};