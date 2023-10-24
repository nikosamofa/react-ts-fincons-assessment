import { FC, useEffect, useMemo, useRef, useState } from "react";
import { DataManager, Query } from "@syncfusion/ej2-data";
import { useSelector, useDispatch } from "react-redux";
import { RootState, USERS_FETCH_REQUEST, REMOVE_ODD_ROWS, UPDATE_USER } from "../../store/types";
import {
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Toolbar,
  ExcelExport,
  Edit,
  CellEditArgs,
  SaveEventArgs,
  BeginEditArgs,
} from "@syncfusion/ej2-react-grids";
import { EmitType } from "@syncfusion/ej2-base";
import { renderEmails, renderGenderIcon } from "./helpers";
import { GendersShow, User } from "../../types";

const tableOptions = {
  page: {
    pageSize: 5,
  },
  toolbar: [
    "ColumnChooser",
    "ExcelExport",
    {
      text: "Remove Odd Rows",
      tooltipText: "Remove Odd Rows",
      id: "remove-odd-rows",
    },
  ],
  edit: {
    allowEditing: true,
  },
};

// const fields = ["FirstName", "LastName", "Gender", "Age", "Emails"] as const;

const genderParams = {
  params: {
    actionComplete: () => false,
    allowFiltering: true,
    dataSource: new DataManager([
      {
        gender: "Male",
        id: "Male",
      },
      { gender: "Female", id: "Female" },
    ]),
    fields: { text: "gender", value: "gender" },
    query: new Query(),
  },
};

interface UsersTableProps {
  gendersShow: GendersShow;
}

export const UsersTable: FC<UsersTableProps> = ({ gendersShow }) => {
  const { users } = useSelector((state: RootState) => state.user);
  const gridRef = useRef<GridComponent | null>(null);
  // const [returnRaw, setReturnRaw] = useState(false);
  const dispatch = useDispatch();

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
        UserName: user.UserName,
        FirstName: user.FirstName ?? "--",
        LastName: user.LastName ?? "--",
        Gender: renderGenderIcon(user.Gender),
        Age: user.Age ?? "--",
        Emails: renderEmails(user.Emails),
      }));
  }, [users, gendersShow]);

  useEffect(() => {
    if (!users) {
      dispatch({ type: USERS_FETCH_REQUEST });
    }
  }, [dispatch, users]);

  const toolbarClick = (args: any) => {
    if (!gridRef.current) return;
    if (args.item.id === "grid_excelexport") {
      gridRef.current.excelExport({
        dataSource: users?.filter(
          (user) =>
            (user.Gender === "Male" && gendersShow.male) ||
            (user.Gender === "Female" && gendersShow.female)
        ),
      });
    }
    if (args.item.id === "remove-odd-rows") {
      dispatch({ type: REMOVE_ODD_ROWS });
    }
  };

  const actionComplete = (args: SaveEventArgs) => {
    if (!gridRef.current) return;

    if (args.requestType === "save") {
      const data = args?.data as User;
      console.log("updated data", data);
      if (!data?.UserName) {
        return;
      }
      dispatch({
        type: UPDATE_USER,
        payload: {
          UserName: data.UserName,
          data: {
            FirstName: data.FirstName,
            LastName: data.LastName,
            Gender: data.Gender,
          },
        },
      });
    }
  };

  // const actionBegin = (args: BeginEditArgs & { requestType: string; form: any }) => {
  //   console.log("actionBegin", args);
  //   if (args.requestType === "beginEdit") {
  //     const user = users?.find((user) => user.UserName === args.primaryKeyValue?.[0]);
  //     if (!user) return;
  //     // setTimeout(() => {
  //     //   if (!args.form) return;
  //     //   fields.forEach((field) => {
  //     //     args.form.setProperties({ [field]: user[field] });
  //     //   });
  //     //   console.log("updated");
  //     // }, 50);
  //     // setReturnRaw(true);
  //   }
  // };

  if (!memoizedUsers) {
    return <div>No users data</div>;
  }

  return (
    <div>
      <GridComponent
        id="grid"
        ref={(g) => (gridRef.current = g)}
        dataSource={memoizedUsers}
        allowPaging={true}
        pageSettings={tableOptions.page}
        toolbar={tableOptions.toolbar}
        showColumnChooser={true}
        allowExcelExport={true}
        toolbarClick={toolbarClick}
        editSettings={tableOptions.edit}
        actionComplete={actionComplete}
        // actionBegin={actionBegin}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="UserName"
            width="0"
            headerTextAlign="Center"
            textAlign="Center"
            isPrimaryKey={true}
          />
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
            editType="dropdownedit"
            edit={genderParams}
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
        <Inject services={[Page, Toolbar, ColumnChooser, ExcelExport, Edit]} />
      </GridComponent>
    </div>
  );
};
