import { PersonInterface } from "./person";
import { Skill } from "./skill";

export enum DeveloperPosition {
  JUNIOR,
  SENIOR
}

export interface DeveloperInterface extends PersonInterface {
  skills: Array<Skill>;
  position: DeveloperPosition;
}
