import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosTableComponent } from './components/todos-table/todos-table.component';
import { MaterialModule } from '../material/material.module'
import { TodosService } from 'src/app/modules/todo-table/components/todos-table/services/todos.service'

@NgModule({
  declarations: [TodosTableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TodosTableComponent],
  providers: [TodosService]
})
export class TodoTableModule {

 }
