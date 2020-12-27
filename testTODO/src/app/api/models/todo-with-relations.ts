/* tslint:disable */
/* eslint-disable */
import { TodoListWithRelations } from './todo-list-with-relations';

/**
 * (tsType: TodoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface TodoWithRelations {
  desc?: string;
  id?: number;
  isComplete?: boolean;
  title: string;
  todoList?: TodoListWithRelations;
  todoListId?: number;
}
