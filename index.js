/*
    SOLID Principles:
    SRP: Single Responsibility Principle
    Example Code for SRP:
    - The code is responsible for one thing, and one thing only.
*/

// Example Code for SRP

// Code Violating SRP
/*
    This function is responsible for two things:
      - It is calculating Employee Salary
      - Logging hours

    Here you can see that 2 different actors are 
    calculating the salary and logging hours.
*/
function Employee(name, hours, salary) {
    this.name = name;
    this.hours = hours;
    this.salary = salary;

    this.calculateSalary = function () {
        return this.salary;
    };

    this.logHours = function () {
        return this.hours;
    }
}

// Solution is to to we can share EmployObject
// and have a single responsibility for each function

//The Employee Object will be used by 2 actors
function EmployeeData(name, hours, salary) {
    this.name = name;
    this.hours = hours;
    this.salary = salary;
}

// Here we are using employee object and doing just 1 task 
//  which is logging salary
const loggingHours = (emplyeeObject) => {
    this.emplyeeObject = emplyeeObject;
    return this.logHours = function () {
        ///.. code to log hours
    };
}

// Here we are using employee object and doing just 1 task 
//  which is calculating salary
const SalaryCalculator = (emplyeeObject) => {
    this.emplyeeObject = emplyeeObject;
    return this.calculateSalary = function () {
        ///.. code to calculate salary
    };
}


// This way we made function persorm one and only task
// for which is assigned to do
