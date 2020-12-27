/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Todo, 'id'>, schemaOptions: { title: 'NewTodo', exclude: [ 'id' ] })
 */
export interface NewTodo {
  desc?: string;
  isComplete?: boolean;
  title: string;
  todoListId?: number;
}
