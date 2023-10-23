import { MaleIcon, FemaleIcon } from "icons";

export const renderGenderIcon = (gender: string | null) => {
  const icon = {
    Male: <MaleIcon />,
    Female: <FemaleIcon />,
  };
  return gender === "Male" || gender === "Female" ? icon[gender] : "--";
};
