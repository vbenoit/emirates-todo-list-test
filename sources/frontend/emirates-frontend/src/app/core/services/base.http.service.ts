import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';
import { CsError } from '../models';

import { appConstants } from '../../shared/app-constants';

/**
 * base class for HTTP services
 */
export abstract class BaseHttpService {

  /**
   * Constructeur par défaut
   */
  constructor() {
  }

  /**
   * to format the path to the endpoint with the env variable and possibly the application
   * @param path relative path to the endpoint (examples : /export/simple)
   * @param appPath root path of the application (examples : '/mrs', '/mrr', '/admin')
   */
  endpoint(path?: string, appPath = ''): string {
    return `${appConstants.apiServerName}${appConstants.apiEndpoint}${appPath}${path}`;
  }

  handleError(errorResponse: HttpErrorResponse) {
    const csError = errorResponse.error && errorResponse.error.hasOwnProperty('code') ?
      new CsError(errorResponse.error.code) :
      new CsError();
    return Observable.throw(csError);
  }

}
