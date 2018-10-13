import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  public value = 0;
  public interval;
  @Output() periodic = new EventEmitter<{value: number}>();
  constructor() { 
    
  }

  onStart(){
    this.interval = setInterval(()=>{
      this.value++;
      this.Periodic();
    }, 1000);
  }

  onStop(){
    clearInterval(this.interval);
  }
  
  Periodic(){
    this.periodic.emit({value: this.value});
  }

  ngOnInit() {
  }

}
