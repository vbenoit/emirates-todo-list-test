import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import { ToDo } from '../../../core/models';

@Component({
  selector: 'em-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoListComponent implements OnInit {

	@Input() toDolist: Array<ToDo>;
	@Input() showPending: boolean;
	@Input() showCompleted: boolean;
	@Output() rmToDo = new EventEmitter<String>();
	@Output() completeToDo = new EventEmitter<String>();

	constructor() { }

	ngOnInit() {
	}

	trackById(index: number, toDo: ToDo): number {
    	return toDo.id;
	}

	ngOnChanges(changes: SimpleChanges) {
    	const _toDoList: SimpleChange = changes.toDoList;
	}

}
