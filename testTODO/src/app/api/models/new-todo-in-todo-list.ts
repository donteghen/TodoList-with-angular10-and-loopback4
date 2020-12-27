/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Todo, 'id'>, 'todoListId'>, schemaOptions: { title: 'NewTodoInTodoList', exclude: [ 'id' ], optional: [ 'todoListId' ] })
 */
export interface NewTodoInTodoList {
  desc?: string;
  isComplete?: boolean;
  title: string;
  todoListId?: number;
}
