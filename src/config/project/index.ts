import { readFileSync } from 'fs';
import { $log } from '@tsed/logger';
import { merge } from 'lodash';
import YAML from 'yaml';
import { ProjectConfig } from 'typings/src/config/project';
import { DEFAULT_CONFIG } from './default';

let cfg: ProjectConfig;
try {
  cfg = merge(DEFAULT_CONFIG, YAML.parse(readFileSync('./config.yml', { encoding: 'utf8' })));
} catch (e) {
  $log.warn('Failed to read YAML configurations from `./config.yml`.');
  cfg = DEFAULT_CONFIG;
}
$log.debug('Configurations:');
$log.debug(JSON.stringify(cfg));

export default cfg;