import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-assignment',
  templateUrl: './binding-assignment.component.html',
  styleUrls: ['./binding-assignment.component.css']
})
export class BindingAssignmentComponent implements OnInit {
  value = 0;
  onPeriodic(data:{value: number}){
    this.value = data.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
