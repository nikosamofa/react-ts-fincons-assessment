import React from "react";
import { Button } from "components/common";

interface ShowHideButtonProps {
  hidden: boolean;
  updateHidden: (value: boolean) => void;
}

export const ShowHideButton: React.FC<ShowHideButtonProps> = ({ hidden, updateHidden }) => {
  return <Button onClick={() => updateHidden(!hidden)}>{hidden ? "Show" : "Hide"} Table</Button>;
};
