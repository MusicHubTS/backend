import {readFileSync} from 'fs';
import {envs} from './envs';
import loggerConfig from './logger';
import {projectConfig, standardize} from './project';
const pkg = JSON.parse(readFileSync('./package.json', {encoding: 'utf8'}));

export const config: Partial<TsED.Configuration> = {
  version: pkg.version,
  envs,
  logger: loggerConfig,
  // additional shared configuration
  project: standardize(projectConfig)
};
