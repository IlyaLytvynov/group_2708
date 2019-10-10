const name = 'John';
const age = 30;
const mobilePhone = '+777888999';
const officePhone = '+777888992';

const employee1Name = 'Jack';
const employee1Salary = 2000;

const employee2Name = 'John';
const employee2Salary = 10000;

const salaries = {
  jack: 2000,
  john: 10000,
  james: 9999,
  yaron: 1234,
};
salaries['ofir'] = 67890;

console.log(salaries['john'], salaries.john);

function addEmployee() {
  const name = prompt('Enter employee name');
  const salary = Number(prompt('Enter employee salary'));
  salaries[name] = salary;
  console.log(salaries);
}

employeeAdd.onclick = addEmployee;
