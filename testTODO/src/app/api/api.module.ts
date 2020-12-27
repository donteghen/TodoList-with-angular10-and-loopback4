/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { PingControllerService } from './services/ping-controller.service';
import { TodoListImageControllerService } from './services/todo-list-image-controller.service';
import { TodoListControllerService } from './services/todo-list-controller.service';
import { TodoListTodoListImageControllerService } from './services/todo-list-todo-list-image-controller.service';
import { TodoListTodoControllerService } from './services/todo-list-todo-controller.service';
import { TodoControllerService } from './services/todo-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    PingControllerService,
    TodoListImageControllerService,
    TodoListControllerService,
    TodoListTodoListImageControllerService,
    TodoListTodoControllerService,
    TodoControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
