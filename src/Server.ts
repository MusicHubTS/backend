import { join } from 'path';
import { Configuration, Inject } from '@tsed/di';
import { PlatformApplication } from '@tsed/common';
import '@tsed/platform-express'; // /!\ keep this import
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import '@tsed/ajv';
import '@tsed/swagger';
import { config } from './config';
import { parseRootAddress } from './config/project';
import * as rest from './controllers/rest';

let { httpPort, httpsPort } = parseRootAddress(config.project.server.root);
httpPort = process.env.PORT || httpPort || '8083';
httpsPort = process.env.HTTPS_PORT || httpsPort || false;

@Configuration({
  ...config,
  acceptMimes: ['application/json'],
  httpPort: httpPort,
  httpsPort: httpsPort,
  componentsScan: false,
  mount: {
    '/rest': [...Object.values(rest)]
  },
  swagger: [
    {
      path: '/doc',
      specVersion: '3.0.1'
    }
  ],
  middlewares: [
    cors(),
    cookieParser(),
    compress({}),
    methodOverride(),
    bodyParser.json(),
    bodyParser.urlencoded({
      extended: true
    })
  ],
  views: {
    root: join(process.cwd(), '../views'),
    extensions: {
      ejs: 'ejs'
    }
  },
  exclude: ['**/*.spec.ts'],
  statics: {
    '/public': [
      {
        root: './public',
        index: false
      }
    ]
  }
})
export class Server {
  @Inject()
  protected app: PlatformApplication;

  @Configuration()
  protected settings: Configuration;
}
