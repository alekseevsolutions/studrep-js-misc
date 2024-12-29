const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
];

const mainFilter = {"id": [], "age": [], "department": []}

initializePage()

function initializePage() {
    showFilterOptions()
    displayEmployees()

    let mainFilterValues = '<option disabled selected value> -- select an option -- </option>';
    for (const [key, value] of Object.entries(mainFilter)) {
        mainFilterValues += `<option value=${key}>${key.toUpperCase()}</option>`;
    }
    document.getElementById('filter').innerHTML = mainFilterValues;
}

document.getElementById('filter').addEventListener('change', (e) => {showFilterOptions()})


function showFilterOptions() {
    document.getElementById('filterInputBlock').style.display = 'none';
    document.getElementById('filterOptionsBlock').style.display = 'none';
    document.getElementById('filterInputField').innerHTML = '';

    const filterChosenValue = document.getElementById('filter').value

    switch (filterChosenValue.toLowerCase()) {
        case "id":
            document.getElementById('filterInputBlock').style.display = 'flex';
            break;
        case "age":
            document.getElementById('filterInputBlock').style.display = 'flex';
            break;
        case "department":
            document.getElementById('filterOptionsBlock').style.display = 'flex';
            break;
    }
}


function filterEmployees() {
    const filterChosenValue = document.getElementById('filter').value

    switch (filterChosenValue.toLowerCase()) {
        case "id":
            const id = document.getElementById('filterInputField').value
            findEmployeeById(id)
            break;
        case "age":
            const age = document.getElementById('filterInputField').value
            findEmployeeByAge(age)
            break;
        case "department":
            document.getElementById('options').value
            break;
    }
}

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const employeeId_int = Number(employeeId);
    const foundEmployee = employees.find(employee => employee.id === employeeId_int);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}

function findEmployeeByAge(employeeAge) {
    const employeeAge_int = Number(employeeAge);
    const foundEmployee = employees.find(employee => employee.age === employeeAge_int);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this age';
    }
}