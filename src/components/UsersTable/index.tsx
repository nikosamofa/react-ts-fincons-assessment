import { FC, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, USERS_FETCH_REQUEST } from "store/types";
import {
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { renderEmails, renderGenderIcon } from "./helpers";
import { GendersShow } from "types";

const tableOptions = {
  pageOptions: {
    pageSize: 5,
  },
  toolbarOptions: ["ColumnChooser"],
};

interface UsersTableProps {
  gendersShow: GendersShow;
}

export const UsersTable: FC<UsersTableProps> = ({ gendersShow }) => {
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

    return users
      .filter(
        (user) =>
          (user.Gender === "Male" && gendersShow.male) ||
          (user.Gender === "Female" && gendersShow.female)
      )
      .map((user) => ({
        FirstName: user.FirstName ?? "--",
        LastName: user.LastName ?? "--",
        Gender: renderGenderIcon(user.Gender),
        Age: user.Age ?? "--",
        Emails: renderEmails(user.Emails),
      }));
  }, [users, gendersShow]);

  if (!memoizedUsers) {
    return <div>No users data</div>;
  }

  return (
    <div>
      <GridComponent
        dataSource={memoizedUsers}
        allowPaging={true}
        pageSettings={tableOptions.pageOptions}
        toolbar={tableOptions.toolbarOptions}
        showColumnChooser={true}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="FirstName"
            width="100"
            headerTextAlign="Center"
            textAlign="Center"
          />
          <ColumnDirective
            field="LastName"
            width="100"
            headerTextAlign="Center"
            textAlign="Center"
          />
          <ColumnDirective
            field="Gender"
            width="100"
            headerTextAlign="Center"
            textAlign="Center"
            disableHtmlEncode={false}
          />
          <ColumnDirective
            field="Age"
            width="100"
            format="C2"
            headerTextAlign="Center"
            textAlign="Center"
          />
          <ColumnDirective
            field="Emails"
            width="100"
            headerTextAlign="Center"
            textAlign="Center"
            disableHtmlEncode={false}
          />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, ColumnChooser]} />
      </GridComponent>
    </div>
  );
};
