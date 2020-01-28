import { Injectable } from "@angular/core";
import { DeveloperInterface } from "../model/developer";
import { Skill } from "../model/skill";

@Injectable({
  providedIn: "root"
})
export class SkillResolverService {
  constructor(
    private developers: Array<DeveloperInterface>
  ) {}
  findAnyDeveloperWithSkill(skill: Skill): ?DeveloperInterface {
    return this.developers.find((dev: DeveloperInterface) => dev.skills.includes(skill));
  }
}
