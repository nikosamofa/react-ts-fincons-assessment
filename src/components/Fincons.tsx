import React, { useState } from "react";
import { UsersTable } from "./UsersTable";
import { ShowHideButton } from "./ShowHideButton";

export const Fincons = () => {
  const [tableHidden, setTableHidden] = useState(false);

  return (
    <div>
      <ShowHideButton hidden={tableHidden} updateHidden={setTableHidden} />
      {!tableHidden && <UsersTable />}
    </div>
  );
};
