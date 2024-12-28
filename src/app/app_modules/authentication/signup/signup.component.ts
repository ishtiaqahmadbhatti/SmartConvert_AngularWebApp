import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModel } from '../../../app_controllers/models.controller';
import { UserService } from '../../../app_controllers/services.controller';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SignupComponent {
  public userModel = new UserModel();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    debugger;
  }

  Signup(formData: any) {
    debugger;
    this.userService.SaveUserRecord(this.userModel).subscribe({
      next: (data: any) => {
        debugger;
        if (data.Validated) {
          if (this.userModel.ID > 0) {
            console.log("User Modified Successfully");
          } else {
            console.log("New User Added Successfully");
          }
        } else {
          console.log(data.ErrorMessage);
        }
      },
      error: (err) => {
        debugger;
        console.log(err.error);
      },
      complete: () => {
        console.log("Signup process completed.");
      }
    });
  }


}
