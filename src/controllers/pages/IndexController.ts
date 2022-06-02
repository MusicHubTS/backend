import {Value, Controller} from '@tsed/di';
// import {HeaderParams} from '@tsed/platform-params';
import {View} from '@tsed/platform-views';
import {Hidden, Get, Returns} from '@tsed/schema';
import { ProjectConfig } from 'typings/src/config/project';

@Hidden()
@Controller('/')
export class IndexController {
  /**
   * @note The returned config has a property `default` which contains what we
   * really want.
   */
  @Value('project')
    projectConfig: {default: ProjectConfig};

  @Get('/')
  @View('index.ejs')
  @(Returns(200, String).ContentType('text/html'))
  get(/*@HeaderParams('x-forwarded-proto') protocol: string, @HeaderParams('host') host: string*/) {
    return this.projectConfig.default;
  }
}
