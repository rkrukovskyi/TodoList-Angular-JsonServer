import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/modules/todo-table/model/todos.model'

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  url : string = "http://localhost:3000/todos/"

  constructor(private http : HttpClient) { }

  getTodos(): Observable<Todo[]> {
    const responseObs = this.http.get('http://localhost:3000/todos');

    return responseObs.pipe(
      map((response: Todo[]) => {
        const todos = this.parseTodos(response);
        return todos;
      }),
      catchError(() => {
        return of(null);
      })
    );
  }

  private parseTodos(response: Todo[]): Todo[] {
    return response ? response.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      createdAt: item.createdAt,
      editedAt: item.editedAt
    })) : [];
  }
}
