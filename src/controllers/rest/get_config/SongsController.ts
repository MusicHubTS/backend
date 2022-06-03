import {Controller, Constant} from '@tsed/di';
import {Get, Returns} from '@tsed/schema';
import { ProjectConfig } from 'typings/src/config/project';
import { APlayerAudios } from 'typings/src/controllers/rest/get_config';
import * as path from 'path';

function parseSongs(songs: ProjectConfig['songs']): APlayerAudios {
  const { prefix, pieces } = songs;
  return Object.values(pieces).map(p => ({
    name: p.name,
    artist: typeof(p.artist) === 'string' ? p.artist : p.artist.join(','),
    url: path.join(prefix, p.path),
    cover: p.cover === null ? null : path.join(prefix, p.cover),
    lrc: p.lrc === null ? null : path.join(prefix, p.lrc)
  }));
}

@Controller('/songs')
export class SongsController {
  @Constant('project')
    projectConfig: {default: ProjectConfig};

  // for productive use
  @Get('/')
  @(Returns(200, String).ContentType('application/json; charset=utf-8'))
  get() {
    return JSON.stringify(parseSongs(this.projectConfig.default.songs));
  }                              
}
