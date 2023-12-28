import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/auth/auth-service";
import {User} from "../../../core/model/user";
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
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public login(): void {
    if (!this.loginForm.invalid) {
      let form: User.LoginForm = {
        login: this.loginForm.controls['login'].value,
        password: this.loginForm.controls['password'].value,
      }
      this.authService.login(form)
      this.dialogRef.close();
    }
  }
}
