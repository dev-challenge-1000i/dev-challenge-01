import { PersonInterface } from "./person";
import { ContactType } from "./contact";
import { ProjectInterface } from "./project";

export interface CustomerInterface extends PersonInterface {
  contactType: ContactType;
  projects: Array<ProjectInterface>;
}
