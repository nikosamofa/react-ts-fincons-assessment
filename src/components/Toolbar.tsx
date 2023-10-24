import { FC, Fragment } from "react";
import { Button } from "./common";
import { GendersShow } from "../types";
import { useDispatch } from "react-redux";
import { REMOVE_ODD_ROWS } from "../store/types";

interface ToolbarProps {
  gendersShow: GendersShow;
  updateGendersShow: (value: GendersShow) => void;
}

export const Toolbar: FC<ToolbarProps> = ({ gendersShow, updateGendersShow }) => {
  const dispatch = useDispatch();

  const handleClickGender = (gender: "male" | "female") => {
    updateGendersShow({
      ...gendersShow,
      [gender]: !gendersShow[gender],
    });
  };

  const removeOddRows = () => {
    dispatch({ type: REMOVE_ODD_ROWS });
  };

  return (
    <Fragment>
      <Button onClick={() => handleClickGender("male")}>
        {gendersShow.male ? "Hide" : "Show"} Male
      </Button>
      <Button onClick={() => handleClickGender("female")}>
        {gendersShow.female ? "Hide" : "Show"} Female
      </Button>
      <Button onClick={removeOddRows}>Remove Odd Rows</Button>
    </Fragment>
  );
};
