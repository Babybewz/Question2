import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillTableComponent } from './fill-table.component';

const routes: Routes = [{ path: '', component: FillTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FillTableRoutingModule { }
