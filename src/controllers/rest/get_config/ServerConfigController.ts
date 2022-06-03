import { Controller, Constant } from '@tsed/di';
import { Get, Returns } from '@tsed/schema';
import { ProjectConfig } from 'typings/src/config/project';

@Controller('/')
export class ServerConfigController {
  @Constant('project')
    projectConfig: { default: ProjectConfig };

  @Get('/')
  @Returns(200, String).ContentType('application/json; charset=utf-8')
  get() {
    return JSON.stringify(this.projectConfig.default);
  }
}