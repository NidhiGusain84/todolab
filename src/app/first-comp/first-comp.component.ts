import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

thetodo: Todo[] = [

{ task: 'fold clothes', completed: true },
{ task: 'put clothes in dresser', completed: false },
{ task: 'relax', completed: true },
{ task: 'pet dog', completed: false },

];

newtask: string = '';
iscompleted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
this.thetodo.push({task: this.newtask, completed: this.iscompleted});
this.newtask = '';
this.iscompleted = false;
}

completeTask(){
  this.iscompleted = true;
}

}
