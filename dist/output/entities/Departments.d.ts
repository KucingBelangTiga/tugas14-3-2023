import { Locations } from "./Locations";
import { Employees } from "./Employees";
import { JobHistory } from "./JobHistory";
export declare class Departments {
    departmentId: number;
    departmentName: string | null;
    location: Locations;
    manager: Employees;
    employees: Employees[];
    jobHistories: JobHistory[];
}
