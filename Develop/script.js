// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];
  let addMoreEmployees = true;

  while (addMoreEmployees) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    const salary = parseFloat(prompt("Enter employee's salary:"));

    // Create employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    // Add employee to array
    employees.push(employee);

    // Ask user if they want to add more employees
    const continueAdding = confirm("Do you want to add another employee?");
    if (!continueAdding) {
      addMoreEmployees = false;
    }
  }

  return employees;
}



// Average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let totalSalary = 0;

  // Total salary
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

  // Average average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Display average salary
  console.log("The Average Salary is: ", averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  }));
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  const getRandomEmployee = function(employeesArray) {
    // Generate a random index within the range of the employeesArray length
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
    // Get the random employee object
    const randomEmployee = employeesArray[randomIndex];
  
    // Display the random employee
    console.log("Random Employee:", randomEmployee.firstName, randomEmployee.lastName);
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
