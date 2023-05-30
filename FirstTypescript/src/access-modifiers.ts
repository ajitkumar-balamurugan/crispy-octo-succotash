class Employee {
  public empName: string;
  protected empCode: number;
  private empSalary: number;

  constructor(name: string, code: number, salary: number) {
    this.empName = name;
    this.empCode = code;
    this.empSalary = salary;
  }
}

class SalesEmployee extends Employee {
  private department: string;

  constructor(name: string, code: number, salary: number) {
    super(name, code, salary);
    this.department = "Sales";
  }
}

let emp = new SalesEmployee("John Smith", 123, 2000);
// emp.empCode; //Compiler Error
// console.log(emp.empCode, emp.empSalary);
