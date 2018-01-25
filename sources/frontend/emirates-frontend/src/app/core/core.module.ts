import { NgModule, Optional, SkipSelf, LOCALE_ID } from '@angular/core';

import { environment } from 'environments/environment';

import { SharedModule } from '../shared/shared.module';

import { CoreComponents } from './components';
import { CoreServices } from './services';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...CoreComponents
  ],
  providers: [
    ...CoreServices
  ],
  exports: [
    ...CoreComponents
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
