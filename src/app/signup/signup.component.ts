import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform;
  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.initform();
  }

  initform(){
    this.signupform = this.fb.group({
      username : ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      repeat: [''],
    })
  }

  submitForm(formdata){
    console.log(formdata);
    if(this.signupform.invalid){
      Swal.fire({
        icon : 'error',
        title : 'OOps!!',
        text : 'Fill form correctly'
      })
      return;
    }
    this.userservice.addUser(formdata).subscribe((res) => {
      console.log(res);
      Swal.fire({
        icon : 'success',
        title : 'Success!!',
        text : 'You have successfully registered'
      })
    })
  }
}
