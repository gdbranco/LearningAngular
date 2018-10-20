import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services-assignment/user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  inactiveUsers = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  onSetActive(index: number){
    this.userService.setActive(index);
  }

}
