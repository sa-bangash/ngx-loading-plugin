import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxloadingDirective } from './directive/ngxloading.directive';
import { IConfig } from './interface';
import { DEFAULT_CONFIG } from './constant';



@NgModule({
  declarations: [NgxloadingDirective],
  imports: [
  ],
  exports: [NgxloadingDirective]
})
export class NgxLoadingPluginModule {
  static forRoot(config: IConfig = DEFAULT_CONFIG): ModuleWithProviders<NgxLoadingPluginModule> {
    return {
      ngModule: NgxLoadingPluginModule,
      providers: [
        {
          provide: 'config', useValue: config,
        }
      ]
    };
  }
}
