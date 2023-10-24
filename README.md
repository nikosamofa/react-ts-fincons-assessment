# Exercise delivery

Documentation:
API -> https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People
SyncFusion DOC -> https://ej2.syncfusion.com/react/documentation/grid/getting-started/

## Application structure

- components: All components are inside this directory
  - common: Common components like buttons inside this directory
  - UsersTable: The users table inside here
  - Fincons.tsx: This is the main component which is rendered inside App
  - etc.
- store: Redux Store
  - reducers
  - sagas
  - types: The types used for store are defined
- types: All the types except used for store are defined here

## Summary

## Specs:

The applicant must produce in an elapsed 1w on StackBlitz a source code in React that renders a datagrid from the SyncFusion library by means of an API call.
It would be great to be able to do the project in TypeScript, but in case you are more comfortable with JS you can create your own empty stackblitz to start with.
NB: Make the code considering that other colleagues may take over the source.

1. Show columns: FirstName, LastName, Gender, Age, Emails
   - [Reference](https://ej2.syncfusion.com/react/documentation/grid/getting-started)
   - Added CSS reference to `App.css`, I was not able to find the node_modules inside this stackblitz, so used cdn css, e.g. `@import url('https://cdn.syncfusion.com/ej2/20.2.38/ej2-react-grids/styles/material.css');`
   - Show columns by using `GridComponent`, `ColumnsDirective`, `ColumnDirective` from module `@syncfusion/ej2-react-grids`
2. In case of null value show placeholder "--"
   - While defining `memoizedUsers`, created a new array mapped from `users` data, each object defined by the following code.

```js
   {
      FirstName: user.FirstName ?? "--",
      ...
   }
```

3. For the Gender column, convert the Male and Female value to an icon of your choice
   - Found male and female png icons online
   - The helper function `renderGenderIcon` will return raw html `<img>` with src for those files depending on the `gender` value
   - The `ColumnDirective` component used to render column data has an option `disableHtmlEncode={false}`, which enables to render raw html.
4. For the Emails column show the list of addresses
   - Pretty similar to above, added the option `disableHtmlEncode={false}` for the Emails column
   - The helper function `renderEmails` returns raw html `ul` with the emails listed by `li`.
5. Realize client side pagination with no.5 items per page
   - [Reference](https://ej2.syncfusion.com/react/documentation/grid/paging#pager-with-page-size-dropdown)
   - `pageSize: 5` is used instead of `8` from the reference
6. Introduce a column chooser to select the columns you want to see on the screen
   - [Reference](https://ej2.syncfusion.com/react/documentation/grid/columns/column-chooser)
   - Exactly the same process as the process
7. Make a button outside the table that when clicked shows/hides the table. When the table reappears, another GET should not start to retrieve-are data.
   - The `Fincons` component has a state `tableHidden: boolean`, which is controlled by a child component `ShowHideButton`
   - If the value is `true`, don't render the `UsersTable`, otherwise render the `UsersTable`
   - In the [UsersTable](components/UsersTable/index.tsx) component, upon mounted, check if the redux store has the `users` data
   - If not, dispatch action with type `USERS_FETCH_REQUEST` to redux
   - If the `users` data exist in redux, create a memoized variable `memoizedUsers`. This will improve the performance when some unnecessary values are updated.

## Below are optional 1-level activities:

8. Introduce two buttons to be able to filter gender

- Added a new component `Toolbar` which includes those 2 buttons and accepts props `gendersShow` and `updateGendersShow`
- `Fincons` component has state `gendersShow: { male: boolean; female: boolean; }` and this state is sent down as props to both components `Toolbar` and `UsersTable`
- In `UsersTable`, upon the boolean value `male` and `female`, the `users` data is filtered to define the `memoizedUsers` data, which is actually rendered on the screen.

9. Introduce a button to GET the data with a debounce (try to use redux-saga)

- Introduced a button `RefetchButton`, upon clicking it, dispatch an action with type `DEBOUNCE_USERS_FETCH_REQUEST`, which yield the saga generator function `debounceFetchUsers` by `takeLatest`
- `debounceFetchUsers` function yield for `delay(500)`
- By `takeLatest` and `delay(500)`, it debounces for 500ms

## Below are optional 2-level activities:

10. Introducing Redux and managing API calls via Redux-Saga

- The generator function `fetchUsers` yields the `axios.get` request and upon the successful response data, call the reducer function from slice `setUsersAction` to update the data
- `createSlice` is used instead of `createReducer` and `createAction`

11. Managing email through a child grid

- // TODO: Explain the process

12. Implement export via excel using syncfusion table functionality.

- [Reference](https://ej2.syncfusion.com/react/documentation/grid/excel-export/excel-exporting)
- Added `'ExcelExport'` to `tableOptions.toolbarOptions` array
- Added `allowExcelExport={true}` to the `GridComponent` prop option
- Injected the component `ExcelExport` into `Inject`
- Created a new ref variable `gridRef` to reference the `GridComponent`
- Upon clicking the toolbar, check if the gridRef is valid and if the clicked button is `Excel Export`, and then export the data

## Below are optional 3-level activities:

13. Enable inline editing on the row(without patching to backend) and in particular on the Gender field

- // TODO: Explain the process

14. Create a custom toolbar with a custom button that removes only odd rows

- [Reference: Custom Toolbar Items](https://ej2.syncfusion.com/react/documentation/grid/tool-bar/tool-bar-items#custom-toolbar-items)
- Added a custom toolbar option
- Upon toolbar click, compare the id of the toolbar button, if it's `'remove-odd-rows'`, dispatch an action with type `REMOVE_ODD_ROWS`
- The saga calls `removeOddRowsAction` method from the slice
- In the reducer, it removes the odd rows from the `users` data
- So it totally removes the odd rows from local memory, need to refetch the data to see the full data again

```js
    {
      text: 'Remove Odd Rows',
      tooltipText: 'Remove Odd Rows',
      id: 'remove-odd-rows',
    }
```

15. Create custom button that removes only odd rows but this time add it to the Out Of The Box toolbar (the original Syncfusion one)

- Added a button `Remove Odd Rows` to the component `Toolbar`
- Other processes are the same as #14

16. Apply a mapping on the Gender column when exporting, you want the data on the excel to appear formatted differently from how it is shown in the grid.
    Example:
    In table it will show via an icon
    In excel it will show via a label: Male (Gender) or / Female (Gender)

- // TODO: Explain the process

## Thoughts

// TODO:

- Did you find complications?
- Did you find bugs in the Syncfusion library?
