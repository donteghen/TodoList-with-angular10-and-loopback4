import {belongsTo, Entity, model, property} from '@loopback/repository';
import {TodoList, TodoListWithRelations} from './todo-list.model';

@model()
export class TodoListImage extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  value: string;

  @belongsTo(() => TodoList)
  todoListId: number;

  constructor(data?: Partial<TodoListImage>) {
    super(data);
  }
}

export interface TodoListImageRelations {
  todoList?: TodoListWithRelations;
}

export type TodoListImageWithRelations = TodoListImage & TodoListImageRelations;
