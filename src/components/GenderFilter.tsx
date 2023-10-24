import { FC, Fragment } from "react";
import { Button } from "./common";
import { GendersShow } from "types";

interface GenderFilterProps {
  gendersShow: GendersShow;
  updateGendersShow: (value: GendersShow) => void;
}

export const GenderFilter: FC<GenderFilterProps> = ({ gendersShow, updateGendersShow }) => {
  const handleClickGender = (gender: "male" | "female") => {
    updateGendersShow({
      ...gendersShow,
      [gender]: !gendersShow[gender],
    });
  };

  return (
    <Fragment>
      <Button onClick={() => handleClickGender("male")}>
        {gendersShow.male ? "Hide" : "Show"} Male
      </Button>
      <Button onClick={() => handleClickGender("female")}>
        {gendersShow.female ? "Hide" : "Show"} Female
      </Button>
    </Fragment>
  );
};
