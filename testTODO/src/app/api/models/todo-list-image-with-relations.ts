/* tslint:disable */
/* eslint-disable */
import { TodoListWithRelations } from './todo-list-with-relations';

/**
 * (tsType: TodoListImageWithRelations, schemaOptions: { includeRelations: true })
 */
export interface TodoListImageWithRelations {
  id?: number;
  todoList?: TodoListWithRelations;
  todoListId?: number;
  value: string;
}
