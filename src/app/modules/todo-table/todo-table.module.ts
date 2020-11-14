import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosTableComponent } from './components/todos-table/todos-table.component';


@NgModule({
  declarations: [TodosTableComponent],
  imports: [
    CommonModule
  ],
  exports: [TodosTableComponent]
})
export class TodoTableModule {

 }
