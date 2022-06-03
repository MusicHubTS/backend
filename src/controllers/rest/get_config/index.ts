import { Controller } from '@tsed/di';
import { SongsController } from './SongsController';
import { ServerConfigController } from './ServerConfigController';
import { isProduction } from 'src/config/envs';

const ctrlChildren = [SongsController].concat(isProduction ? [] : [ServerConfigController]);

@Controller({
  path: '/get-config',
  children: ctrlChildren
})
export class GetConfigController {}
