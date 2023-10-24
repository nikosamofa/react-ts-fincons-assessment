import React, { useState } from "react";
import { UsersTable } from "./UsersTable";
import { ShowHideButton } from "./ShowHideButton";
import { GendersShow } from "../types";
import { Toolbar } from "./Toolbar";
import { RefetchButton } from "./RefetchButton";
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
        <RefetchButton />
      </div>
      <div className={styles.buttonContainer}>
        <Toolbar gendersShow={gendersShow} updateGendersShow={setGendersShow} />
      </div>
      {!tableHidden && <UsersTable gendersShow={gendersShow} />}
    </div>
  );
};
