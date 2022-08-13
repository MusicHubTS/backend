import { readFileSync } from 'fs';
import { $log } from '@tsed/logger';
import { merge } from 'lodash';
import YAML from 'yaml';
import type { ProjectConfig } from 'typings';
import { DEFAULT_CONFIG, DEFAULT_SONG_PIECE, VALID_RESOURCE_URL_SCHEMA } from './default';
import path from 'path';
import { config } from '..';

const projectRoot = path.resolve(__dirname, '../../../');

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

function isValidURL(s: string): boolean {
  try {
    new URL(s);
  } catch (_) {
    return false;
  }

  return true;
}

function isValidNetworkResourceURL(s: string): boolean {
  if (!isValidURL(s)) {
    return false;
  }

  return VALID_RESOURCE_URL_SCHEMA.includes(new URL(s).protocol);
}

/**
 * Validate if a string is a valid local resource URL.
 * @note The string should have the schema `file:` explicitly.
 * @param s The given string to be validated.
 */
function isValidLocalResourceURL(s: string): boolean {
  if (!isValidURL(s)) {
    return false;
  }

  return new URL(s).protocol === 'file:';
}

/**
 * Parse a resource path to acceptable one.
 * 
 * We assume resource paths have only 3 valid types:
 * 
 * 1. Network absolute URLs, i.e. `http://localhost/foo/bar` (should be with *valid* schemas) or `/foo/bar` (can be regarded as another kind of relative URLs to root of the back-end server).
 * 2. Filesystem absolute paths, i.e. `file:///foo/bar`.
 * 3. Filesystem relative paths, i.e. `foo/bar` or `./foo/bar` (relative to root of the project).
 * 
 * @note For case #2, we need more implementations on it.
 * @see `default.VALID_RESOURCE_URL_SCHEMA` for all valid schemas of network resource URLS.
 * @param p The given path to be parsed.
 * @throws `RangeError` if an invalid resource path is given.
 */
function parseResourcePath(p: string) {
  // Case #1
  if (isValidNetworkResourceURL(p)) {
    return p;
  } else if (path.isAbsolute(p)) {
    return new URL(p, standardized.server.root).href;
  }
  
  // Case #2
  else if (isValidLocalResourceURL(p)) {
    // should be handled appropriately
    return p;
  }
  
  // Case #3
  else if (!isValidURL(p) && !path.isAbsolute(p)) {
    return path.resolve(config.projectRoot, p);
  }
  
  // Invalid
  else {
    throw RangeError('invalid resource path: ' + p);
  }
}



function parseRootAddress(addr: string): {
  httpPort: string | boolean;
  httpsPort: string | boolean;
} {
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

$log.debug('Project Root: ' + projectRoot);
$log.debug('Configurations:');
$log.debug(JSON.stringify(cfg, undefined, 2)); // original config, unless parsing has any error
$log.debug('Standardized configuration:');
$log.debug(JSON.stringify(standardized, undefined, 2)); // standardized form

export { parseResourcePath, parseRootAddress, standardize, cfg as projectConfig, projectRoot };
