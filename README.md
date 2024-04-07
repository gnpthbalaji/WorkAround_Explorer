# WorkAround Explorer

WorkAround Explorer is a project that allows users to explore salaries by role and company. This project was created to explore JavaScript Modules.

## Project Structure

The project is structured as follows:

- `index.html`: The HTML file that structures the web page. It includes a script tag to import the `main.js` module.
- `main.js`: This is the main JavaScript file that imports functions from the other modules. It handles user interactions and updates the results on the web page.
- `salaryData.js`: This module includes the raw salary data and exports `getRoles` and `getCompanies` functions.
- `workAroundModule.js`: This module provides functions to calculate average salaries by role and company, salary at a specific company, and industry average salary.
- `utilities.js`: This module provides utility functions such as `formatCurrency`.

## How to Use

The application presents the user with two sets of radio buttons. One set allows the user to select a company, and the other set allows the user to select a role. Once both a company and a role are selected, the application displays:

- The salary for the selected role at the selected company
- The industry average salary for the selected role
- The average salary at the selected company
- The average salary in the Tech industry

## Future Improvements

- Add more data to the `salaryData.js` module.
- Improve the UI/UX of the application.