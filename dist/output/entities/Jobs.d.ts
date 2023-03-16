import { Employees } from "./Employees";
import { JobHistory } from "./JobHistory";
export declare class Jobs {
    jobId: string;
    jobTitle: string | null;
    minSalary: string | null;
    maxSalary: string | null;
    employees: Employees[];
    jobHistories: JobHistory[];
}
