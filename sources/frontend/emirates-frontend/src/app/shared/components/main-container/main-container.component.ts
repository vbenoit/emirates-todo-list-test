import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

// TODO delete
//import { OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import { ToDoService } from '../../../core/services';

import { ToDo } from '../../../core/models';

@Component({
  selector: 'em-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'] 
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent implements OnInit {

	toDoList: Array<ToDo>;
	toDoServiceSubcription;

	toDoToAddContent = "";
	sendingToDo = false;
	disableAddBtn = false;

	showPending = true;
	showCompleted = true;

	MAX_MESSAGE_SIZE = 255;
	MAX_MESSAGE_SIZE_ERROR = "The todo content should be smaller than 255 characters.";
	EMPTY_MESSAGE_SIZE_ERROR = "The todo content is empty.";

	constructor( private toDoService: ToDoService ){
		this.toDoService.refresh();
	}

	ngOnInit() {

		this.toDoServiceSubcription = this.toDoService.getToDoList()
			.subscribe(
				pToDoList => {
					this.toDoList = pToDoList;
					//enable button to add toDo if disabled
					this.sendingToDo = false;
				}
			);
	}

	ngOnDestroy() {
		this.toDoServiceSubcription.unsubscribe();
	}

	onToDoContentType(value: string) {
		this.toDoToAddContent = value;
	}

	addToDo() {
		if ( !this.toDoToAddContent ){
			this.displaySnackBar( this.EMPTY_MESSAGE_SIZE_ERROR );
			return;
		}
		if ( this.toDoToAddContent.length >= this.MAX_MESSAGE_SIZE ){
			this.displaySnackBar( this.MAX_MESSAGE_SIZE_ERROR );
			return;
		}

		this.disableAddBtn = true;
		//to avoid btn to get stuck if there is a network communication issue
		setTimeout( () => { 
				this.disableAddBtn = false; 
			}, 2500 ); 

		this.sendingToDo = true;
		this.toDoService.addToDo( this.toDoToAddContent );
	}

	removeToDo( id ) {
		this.toDoService.removeToDo(id);
	}

	completedToDo( id ) {
		this.toDoService.completedToDo(id);
	}

	displaySnackBar( msg: string ) {
		var snackbarContainer = document.querySelector('#demo-snackbar-example');
		var data = {
    		message: msg,
    		timeout: 2000,
   		};
    	eval("snackbarContainer.MaterialSnackbar.showSnackbar(data)");
	}

}
