import React, { useState } from "react";
import { UsersTable } from "./UsersTable";
import { ShowHideButton } from "./ShowHideButton";
import { GendersShow } from "types";
import { GenderFilter } from "./GenderFilter";
import styles from "./Fincons.module.css";

export const Fincons = () => {
  const [tableHidden, setTableHidden] = useState(false);
  const [gendersShow, setGendersShow] = useState<GendersShow>({
    male: true,
    female: true,
  });

  return (
    <div>
      <div className={styles.buttonContainer}>
        <ShowHideButton hidden={tableHidden} updateHidden={setTableHidden} />
      </div>
      <div className={styles.buttonContainer}>
        <GenderFilter gendersShow={gendersShow} updateGendersShow={setGendersShow} />
      </div>
      {!tableHidden && <UsersTable gendersShow={gendersShow} />}
    </div>
  );
};
