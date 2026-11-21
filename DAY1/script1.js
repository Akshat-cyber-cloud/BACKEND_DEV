const employees = [
  { id: 101, name: "Sarah", department: "Engineering", salary: 85000, active: true },
  { id: 102, name: "Michael", department: "Sales", salary: 50000, active: false },
  { id: 103, name: "Priya", department: "Engineering", salary: 95000, active: true },
  { id: 104, name: "James", department: "Marketing", salary: 60000, active: true },
  { id: 105, name: "Alex", department: "Sales", salary: 70000, active: true },
  { id: 106, name: "Emily", department: "Engineering", salary: 110000, active: false }
];

const activeEmployees = employees.filter(t => t.active === true && t.salary > 60000);

const res = activeEmployees.map(emp => emp.name);

console.log(res);