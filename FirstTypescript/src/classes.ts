class Department {
  protected employees: string[] = [];
  constructor(private readonly id: number, public departmentName: string) {}
  describe(this: Department) {
    console.log(`Department: ${this.departmentName}`);
  }
  addEmployees(employee: string) {
    this.employees.push(employee);
    return this.employees;
  }
  printEmployees() {
    console.log(this.employees);
  }
}

const accounting = new Department(2, "Accounting");
// accounting.describe()

accounting.addEmployees("name");
accounting.printEmployees();

class ITDepartment extends Department {
  private assets: string[] = [];
  constructor(id: number, assets: string[]) {
    super(id, "IT");
    this.assets = assets;
  }
  appendEmployees(employee: string) {
    this.employees.push(employee);
    return this.employees;
  }
}
const it = new ITDepartment(1, ["computers"]);
it.describe();
it.addEmployees("Other Emp");
it.printEmployees();

// const accountCopy = {departmentName:'',describe:accounting.describe}
// const test = accountCopy.describe()

// console.log(accounting);
