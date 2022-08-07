import { readFileSync } from 'fs';
import { $log } from '@tsed/logger';
import { merge } from 'lodash';
import YAML from 'yaml';
import type { ProjectConfig } from 'typings';
import { DEFAULT_CONFIG, DEFAULT_SONG_PIECE, VALID_RESOURCE_URL_SCHEMA } from './default';
import path from 'path';

function isValidURL(s: string): boolean {
  try {
    new URL(s);
  } catch (_) {
    return false;
  }

  return true;
}

function isValidResourceURL(s: string): boolean {
  if (!isValidURL(s)) {
    return false;
  }

  return VALID_RESOURCE_URL_SCHEMA.includes(new URL(s).protocol);
}

function isAbsoluteResourcePath(s: string): boolean {
  return (isValidURL(s) && isValidResourceURL(s)) || path.isAbsolute(s);
}

/**
 * Parse a resource path to acceptable one.
 * @param p the given path to be parsed
 * @param options custom options
 * @param options.prefix prefix for relative paths
 * @param options.suffix suffix for all paths
 */
function parseResourcePath(p: string, options?: { prefix?: string; suffix?: string }): string {
  let prefix = '',
    suffix = '';
  if (options !== undefined && options.prefix !== undefined) {
    prefix = options.prefix;
  }
  if (options !== undefined && options.suffix !== undefined) {
    suffix = options.suffix;
  }
  if (isAbsoluteResourcePath(p)) {
    return path.join(p, suffix);
  } else {
    return path.join(prefix, p, suffix);
  }
}

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

function parseRootAddress(addr: string): ({
  httpPort: string | boolean,
  httpsPort: string | boolean
}) {
  if (addr.slice(0, 7) === 'http://') {
    return {
      httpPort: addr.slice(7),
      httpsPort: false
    };
  } else if (addr.slice(0, 8) === 'https://') {
    return {
      httpPort: false,
      httpsPort: addr.slice(8)
    };
  } else {
    return {
      httpPort: false,
      httpsPort: false
    };
  }
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
$log.debug(JSON.stringify(cfg, undefined, 2)); // original config, unless parsing has any error
$log.debug('Standardized configuration:');
$log.debug(JSON.stringify(standardized, undefined, 2)); // standardized form

export {
  parseResourcePath,
  parseRootAddress,
  standardize,
  cfg as projectConfig
};
