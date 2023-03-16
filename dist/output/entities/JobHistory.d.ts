import { Departments } from "./Departments";
import { Employees } from "./Employees";
import { Jobs } from "./Jobs";
export declare class JobHistory {
    employeeId: number;
    startDate: string;
    endDate: string | null;
    department: Departments;
    employee: Employees;
    job: Jobs;
}
