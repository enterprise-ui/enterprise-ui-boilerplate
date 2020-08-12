import 'isomorphic-fetch';
import 'reflect-metadata';

import { IAPI, IGetRequest } from '@enterprise-ui/appcore';
import { injectable } from 'inversify';

@injectable()
export class ApiService implements IAPI {

  /**
   * @inheritdoc
   */
  get({ url }: IGetRequest) {
    return fetch(url);
  }

}
