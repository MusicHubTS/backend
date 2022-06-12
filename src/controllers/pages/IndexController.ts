import {Value, Controller} from '@tsed/di';
// import {HeaderParams} from '@tsed/platform-params';
import {View} from '@tsed/platform-views';
import {Hidden, Get, Returns} from '@tsed/schema';
import { ProjectConfig } from 'typings';

@Hidden()
@Controller('/')
export class IndexController {
  @Value('project')
    projectConfig: {default: ProjectConfig};

  @Get('/')
  @View('index.ejs')
  @(Returns(200, String).ContentType('text/html'))
  get(/*@HeaderParams('x-forwarded-proto') protocol: string, @HeaderParams('host') host: string*/) {
    return this.projectConfig;
  }
}
