import {JobModel} from "./job.model";


export interface UserModel {
  id?: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  jobs: Array<JobModel>;
}
