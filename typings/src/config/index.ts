import { ProjectConfig } from "./project";

export interface TsEDGlobalConfiguration extends Partial<TsED.Configuration> {
  project: ProjectConfig
}