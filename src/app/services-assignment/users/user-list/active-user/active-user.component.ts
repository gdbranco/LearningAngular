import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services-assignment/user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  activeUsers = [];
  constructor(private userService: UserService) {
    
   }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
  }

  onSetInactive(index: number){
    this.userService.setInactive(index);
  }
}
