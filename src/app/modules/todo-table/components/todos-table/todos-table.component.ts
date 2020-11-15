import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from 'src/app/modules/todo-table/components/todos-table/services/todos.service'
import { Todo } from '../../model/todos.model';

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.sass']
})
export class TodosTableComponent implements OnInit {
  todos: any
  displayedColumns: string[];
  dataSource: any;

  constructor(private todosService: TodosService) {
    // this.displayedColumns = ['Number', 'Title', 'Creation Date', 'Edit Date', 'Edit', 'Delete'];

  }


  ngOnInit(): void {
    // this.todos = this.todosService.getTodos().subscribe(
    //     (response) => {
    //      console.log(response.map(item=>item));
    //     },
    //    (error) => console.log(error)
    //  )
    this.todos = this.todosService.getTodos();
    this.displayedColumns = ['Number', 'Title', 'CreationDate', 'EditDate', 'Edit', 'Delete'];
    this.dataSource = this.todos;

  }

  getEditEl(element) {
    console.log(element)
  }

  getDeleteEl(element) {
    console.log(element)
  }

}
