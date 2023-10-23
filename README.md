# Exercise delivery

Documentation:
API -> https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People
SyncFusion DOC -> https://ej2.syncfusion.com/react/documentation/grid/getting-started/

## Application structure

// TODO: Explain folder structuring as clearly as if you were going to give it in the hands of your colleague to perform bugfixes and add features on this project.

## Summary

## Specs:

The applicant must produce in an elapsed 1w on StackBlitz a source code in React that renders a datagrid from the SyncFusion library by means of an API call.
It would be great to be able to do the project in TypeScript, but in case you are more comfortable with JS you can create your own empty stackblitz to start with.
NB: Make the code considering that other colleagues may take over the source.

1. Show columns: FirstName, LastName, Gender, Age, Emails
   - // TODO: Explain the process
2. In case of null value show placeholder "--"
   - // TODO: Explain the process
3. For the Gender column, convert the Male and Female value to an icon of your choice
   - // TODO: Explain the process
4. For the Emails column show the list of addresses
   - // TODO: Explain the process
5. Realize client side pagination with no.5 items per page
   - // TODO: Explain the process
6. Introduce a column chooser to select the columns you want to see on the screen
   - // TODO: Explain the process
7. Make a button outside the table that when clicked shows/hides the table. When the table reappears, another GET should not start to retrieve-are data.
   - // TODO: Explain the process

## Below are optional 1-level activities:

8. Introduce two buttons to be able to filter gender

- // TODO: Explain the process

9. Introduce a button to GET the data with a debounce (try to use redux-saga)

- // TODO: Explain the process

## Below are optional 2-level activities:

10. Introducing Redux and managing API calls via Redux-Saga

- // TODO: Explain the process

11. Managing email through a child grid

- // TODO: Explain the process

12. Implement export via excel using syncfusion table functionality.

- // TODO: Explain the process

## Below are optional 3-level activities:

13. Enable inline editing on the row(without patching to backend) and in particular on the Gender field

- // TODO: Explain the process

14. Create a custom toolbar with a custom button that removes only odd rows

- // TODO: Explain the process

15. Create custom button that removes only odd rows but this time add it to the Out Of The Box toolbar (the original Syncfusion one)

- // TODO: Explain the process

16. Apply a mapping on the Gender column when exporting, you want the data on the excel to appear formatted differently from how it is shown in the grid.
    Example:
    In table it will show via an icon
    In excel it will show via a label: Male (Gender) or / Female (Gender)

- // TODO: Explain the process

## Thoughts

// TODO:

- Did you find complications?
- Did you find bugs in the Syncfusion library?
