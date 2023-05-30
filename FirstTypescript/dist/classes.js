"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, departmentName) {
        this.id = id;
        this.departmentName = departmentName;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department: ".concat(this.departmentName));
    };
    Department.prototype.addEmployees = function (employee) {
        this.employees.push(employee);
        return this.employees;
    };
    Department.prototype.printEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department(2, "Accounting");
// accounting.describe()
accounting.addEmployees("name");
accounting.printEmployees();
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, assets) {
        var _this = _super.call(this, id, "IT") || this;
        _this.assets = [];
        _this.assets = assets;
        return _this;
    }
    ITDepartment.prototype.appendEmployees = function (employee) {
        this.employees.push(employee);
        return this.employees;
    };
    return ITDepartment;
}(Department));
var it = new ITDepartment(1, ["computers"]);
it.describe();
it.addEmployees("Other Emp");
it.printEmployees();
// const accountCopy = {departmentName:'',describe:accounting.describe}
// const test = accountCopy.describe()
// console.log(accounting);
