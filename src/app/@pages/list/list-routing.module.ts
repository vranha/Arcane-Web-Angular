import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: '', component: ListComponent
  },
  {
    path: 'other', component: OtherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
