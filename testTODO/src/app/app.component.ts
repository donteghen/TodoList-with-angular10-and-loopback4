import {Component, OnInit} from '@angular/core';
import {Todo, TodoList} from './api/models';
import {TodoControllerService} from './api/services/todo-controller.service';
import {TodoListControllerService} from './api/services/todo-list-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // add `todos` variable which holds the todo list
  todos: Todo[];
  todolists: TodoList[];
  id: number[];
  report: Report[] = [];
  // add a todoService parameter of type TodoControllerService to the constructor
  constructor(private todolistService: TodoListControllerService, private todoService: TodoControllerService) { }
  // update this method to get the todo list on init
  ngOnInit(): void {
    this.getTodos();
  }
  // add a new function getTodos to get the todo list from the service
  getTodos(): void {
    this.todolistService.find().subscribe(todolists => {
      todolists.forEach(td => {
        this.todoService.find().subscribe(todos => {
          let hold = todos.filter(tds => tds.todoListId == td.id).map(x => x.title + " : " + x.desc);
          this.report.push(new Report(td.title, hold));
          console.log(this.report);
        });
      });

    });

  }

}

export class Report {
  constructor(
    public task?: string,
    public taskContent?: string[]
  ) { }
}





