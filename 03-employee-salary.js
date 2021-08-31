// Megadott egy cégnek az alkalmazottairól rengeteg információ
// Néhány alkalmazottnak is van alkalmazottja(i)
// Számold össze, hogy a cég összesen mennyit bért fizet ki MINDEN alkalmazottjainak

const sampleCompany = [
  {
    name: "Alice",
    salary: 80000,
    employees: [
      {
        name: "Bob",
        salary: 67000,
        employees: [{ name: "John", salary: 45000 }],
      },
      { name: "Rebecca", salary: 67000 },
    ],
  },
  {
    name: "Eugene",
    salary: 110000,
  },
];
/**
 * Megszámolja, hogy a cégben mennyi az alkalmazottak bérének összege
 * Rekurzívan meghívja magát, ha egy alkalmazottnak alkalmazottai van
 * @param   {Object} employees {name: alkalmazott név, salary: alkalmazott bér (szám), employees: alkalmazott alkalmazottai (lista)}
 * @returns {Number} Alkalmazottak bérének összege
 */
function calculateExpenses(employees) {
  let expenses = 0;

  for (const employeeIndex in employees) {
    if (Object.hasOwnProperty.call(employees, employeeIndex)) {
      const employee = employees[employeeIndex];

      if (employee.salary) {
        expenses += employee.salary;
      }

      if (employee.employees) {
        expenses += calculateExpenses(employee.employees);
      }
    }
  }

  return expenses;
}

console.log(calculateExpenses(sampleCompany));
module.exports = { sampleCompany, calculateExpenses };
