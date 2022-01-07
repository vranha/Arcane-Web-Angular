import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RequisitsComponent } from './requisits/requisits.component';
import { ExplainComponent } from './explain/explain.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    PresentationComponent,
    RequisitsComponent,
    ExplainComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    TranslateModule,
    CoreModule,
  ],
})
export class HomeModule {}
