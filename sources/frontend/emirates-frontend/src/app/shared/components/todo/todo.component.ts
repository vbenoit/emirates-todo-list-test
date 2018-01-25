import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { ToDo } from '../../../core/models';

@Component({
  selector: 'em-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoComponent implements OnInit {

	@Input() toDo: ToDo;
	@Input() showPending: boolean;
	@Input() showCompleted: boolean;
	@Output() rmToDo = new EventEmitter<String>();
	@Output() completeToDo = new EventEmitter<String>();

	constructor() { }

	ngOnInit() {
	}

	remove( id: string ) {
		this.rmToDo.emit(id);
	}

	completed( id: string ) {
		this.completeToDo.emit(id);
	}

	displayToDo(){
		return (this.toDo.status.toLowerCase() === 'pending' && this.showPending) || (this.toDo.status.toLowerCase() === 'completed' && this.showCompleted)
	}

}
