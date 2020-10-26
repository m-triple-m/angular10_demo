import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users;
  constructor(private userservice: UserService) { }


  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){

    this.userservice.getAllUsers().subscribe( (data) => {
      console.log(data);
      this.users = data;
    })

  }

}
