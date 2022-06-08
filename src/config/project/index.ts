import { readFileSync } from 'fs';
import { $log } from '@tsed/logger';
import { merge } from 'lodash';
import YAML from 'yaml';
import { ProjectConfig } from 'typings';
import { DEFAULT_CONFIG, DEFAULT_SONG_PIECE } from './default';

function standardize(cfg: ProjectConfig): ProjectConfig {
  // Step 1: Merge with a rough framework
  const standardized: ProjectConfig = merge(DEFAULT_CONFIG, cfg);

  // Step 2: Standardize song pieces
  /**
   * @note Don't use `merge()` here, for it will modify the destination object in-place.
   */
  standardized.songs.pieces.forEach((v, idx, arr) => {
    arr[idx] = { ...DEFAULT_SONG_PIECE, ...v };
  });

  return standardized;
}

let cfg: ProjectConfig;
try {
  cfg = YAML.parse(readFileSync('./config.yml', { encoding: 'utf8' }));
} catch (e) {
  $log.warn('Failed to read YAML configurations from `./config.yml`.');
  cfg = DEFAULT_CONFIG;
}
const standardized = standardize(cfg);
$log.debug('Configurations:');
$log.debug(JSON.stringify(cfg, undefined, 2));  // original config, unless parsing has any error
$log.debug('Standardized configuration:');
$log.debug(JSON.stringify(standardized, undefined, 2));  // standardized form

export default cfg;