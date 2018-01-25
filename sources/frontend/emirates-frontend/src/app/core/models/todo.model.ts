export enum Status {
  Pending = 'Pending',
  Completed = 'Completed',
}

export class ToDo {
  id: number;
  content: string;
  status: string;
}

export class ToDoDTO {

  id: number;
  content: string;
  status: string;

}
