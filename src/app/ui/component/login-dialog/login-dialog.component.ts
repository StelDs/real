import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/auth/auth-service";
import {LoginForm} from "../../../core/model/user";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;

  hide: boolean = true;

  constructor(private readonly authService: AuthService,
              private dialogRef: MatDialogRef<LoginDialogComponent>) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public login(): void {
    if (!this.loginForm.invalid) {
      let form: LoginForm = {
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value,
      }
      this.authService.login(form).subscribe({
        next: (data: any): void => {
          this.authService.setAccessToken(data.accessToken)
          // this.setRefreshToken(data.refresh)
          this.authService.setUsername(form.username)
          this.dialogRef.close();
        },
        error: err => {
          console.log('-')
        }
      })
    }
  }
}
