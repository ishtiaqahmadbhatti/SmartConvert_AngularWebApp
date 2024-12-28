import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModel } from '../../../app_controllers/models.controller';
import { UserService } from '../../../app_controllers/services.controller';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SigninComponent {
  public userModel = new UserModel();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    debugger;
  }

  Signin(formData: any) {
    debugger;
  }
}