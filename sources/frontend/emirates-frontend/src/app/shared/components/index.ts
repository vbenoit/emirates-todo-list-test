import { ToDoListComponent } from './todo-list/todo-list.component';
import { ToDoComponent } from './todo/todo.component';
import { MainContainerComponent } from './main-container/main-container.component';

export * from './todo-list/todo-list.component';
export * from './main-container/main-container.component';
export * from './todo/todo.component';

export const SharedComponents = [
  ToDoListComponent,
  MainContainerComponent,
  ToDoComponent
];
