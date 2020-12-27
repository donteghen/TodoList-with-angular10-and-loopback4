/* tslint:disable */
/* eslint-disable */
import { TodoListImageWithRelations } from './todo-list-image-with-relations';
import { TodoWithRelations } from './todo-with-relations';

/**
 * (tsType: TodoListWithRelations, schemaOptions: { includeRelations: true })
 */
export interface TodoListWithRelations {
  color?: string;
  id?: number;
  title: string;
  todoListImage?: TodoListImageWithRelations;
  todos?: Array<TodoWithRelations>;
}
