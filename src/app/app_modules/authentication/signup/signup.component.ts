import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModel } from '../../../app_controllers/models.controller';
import { UserService } from '../../../app_controllers/services.controller';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class SignupComponent {
  public userModel = new UserModel();

  constructor(private userService: UserService, private router: Router) {
    debugger;
  }

  ngOnInit() {
    debugger;
  }

  Signup(formData: any) {
    debugger;
    this.userService.SaveUserRecord(this.userModel).subscribe({
      next: (data: any) => {
        debugger;
          this.router.navigate(['/verification/verifyemailaddress']);
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
