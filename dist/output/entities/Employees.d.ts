import { Departments } from "./Departments";
import { Jobs } from "./Jobs";
import { JobHistory } from "./JobHistory";
export declare class Employees {
    employeeId: number;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    hireDate: string | null;
    salary: string | null;
    departments: Departments[];
    department: Departments;
    job: Jobs;
    manager: Employees;
    employees: Employees[];
    jobHistories: JobHistory[];
}
