import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { FillTableRoutingModule } from './fill-table-routing.module';
import { FillTableComponent } from './fill-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FillTableComponent],
  imports: [
    CommonModule,
    FillTableRoutingModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
})
export class FillTableModule {}
