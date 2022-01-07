import { FakeApiService } from './../../shared/services/fake-api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkillBarModule } from 'ngx-skill-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { SearchPipe } from './search-pipe/search.pipe';


import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OtherComponent } from './other/other.component';
import { OtherApiService } from 'src/app/shared/services/other-api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    ListComponent,
    CardlistComponent,
    SearchPipe,
    OtherComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    NgxSkillBarModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    TranslateModule,
    CoreModule,
  ],
  providers: [FakeApiService, OtherApiService]
})
export class ListModule { }
