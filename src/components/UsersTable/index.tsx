import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, USERS_FETCH_REQUEST } from "store/types";
import { ColumnDirective, ColumnsDirective, GridComponent } from "@syncfusion/ej2-react-grids";
import { renderGenderIcon } from "./helpers";

export const UsersTable = () => {
  const { users } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users) {
      dispatch({ type: USERS_FETCH_REQUEST });
    }
  }, [dispatch, users]);

  const memoizedUsers = useMemo(() => {
    if (!users) {
      return users;
    }

    return users.map((user) => ({
      FirstName: user.FirstName ?? "--",
      LastName: user.LastName ?? "--",
      Gender: renderGenderIcon(user.Gender),
      Age: user.Age ?? "--",
      Emails: (
        <ul>
          {user.Emails.map((email) => (
            <li key={email}>email</li>
          ))}
        </ul>
      ),
    }));
  }, [users]);

  if (!memoizedUsers) {
    return <div>No users data</div>;
  }

  return (
    <div>
      <GridComponent dataSource={memoizedUsers}>
        <ColumnsDirective>
          <ColumnDirective field="FirstName" width="100" textAlign="Right" />
          <ColumnDirective field="LastName" width="100" />
          <ColumnDirective field="Gender" width="100" textAlign="Right" disableHtmlEncode={false} />
          <ColumnDirective field="Age" width="100" format="C2" textAlign="Right" />
          <ColumnDirective field="Emails" width="100" disableHtmlEncode={true} />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};
