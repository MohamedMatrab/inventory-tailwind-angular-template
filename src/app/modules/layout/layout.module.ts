import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideAngularSvgIcon, SvgIconComponent} from 'angular-svg-icon';

import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [LayoutRoutingModule, HttpClientModule, SvgIconComponent],
  providers: [ provideAngularSvgIcon() ],
})
export class LayoutModule {}
