import { Controller, Constant } from '@tsed/di';
import { Get, Returns } from '@tsed/schema';
import { ProjectConfig, APlayerAudios } from 'typings';
import { parseResourcePath } from 'src/config/project';

function parseSongs(songs: ProjectConfig['songs']): APlayerAudios {
  const { prefix, pieces } = songs;
  return pieces.map((p) => ({
    name: p.name,
    artist: typeof p.artist === 'string' ? p.artist : p.artist.join(','),
    url: parseResourcePath(p.url, { prefix: prefix }),
    cover: p.cover === null ? null : parseResourcePath(p.cover, { prefix: prefix }),
    lrc: p.lrc === null ? null : parseResourcePath(p.lrc, { prefix: prefix })
  }));
}

@Controller('/songs')
export class SongsController {
  @Constant('project')
    projectConfig: ProjectConfig;

  // for productive use
  @Get('/')
  @Returns(200, String).ContentType('application/json; charset=utf-8')
  get() {
    return JSON.stringify(parseSongs(this.projectConfig.songs));
  }
}
