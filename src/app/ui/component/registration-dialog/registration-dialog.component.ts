import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {createPasswordStrengthValidator} from "../../../util/config/create-password-strength-validator";
import {confirmPasswordValidator} from "../../../util/config/confirm-password-validator";
import {AuthService} from "../../../core/auth/auth-service";
import {User} from "../../../core/model/user";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {
  registrationForm!: FormGroup;
  password: FormControl;
  confirmPassword: FormControl;
  hide: boolean = true;
  hide2: boolean = true;

  constructor(private readonly authService: AuthService,
              private readonly dialogRef: MatDialogRef<RegistrationDialogComponent>) {
    this.password = new FormControl('', [Validators.required, createPasswordStrengthValidator()]);
    this.confirmPassword = new FormControl('', [Validators.required, confirmPasswordValidator(this.password)])
    this.registrationForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.registrationForm.addControl('password', this.password)
    this.registrationForm.addControl('confirmPassword', this.confirmPassword)
  }

  ngOnInit(): void {
  }

  public registration(): void {
    if (!this.registrationForm.invalid) {
      let form: User.RegistrationForm = {
        login: this.registrationForm.controls['login'].value,
        phone: this.registrationForm.controls['phone'].value,
        email: this.registrationForm.controls['email'].value,
        password: this.registrationForm.controls['password'].value,
      }
      this.authService.registration(form)
      this.dialogRef.close();
    }
  }

  private getPassword(): string {
    console.log(this.registrationForm)
    if (this.registrationForm == undefined) {
      return '';
    }
    return this.registrationForm.get('password')?.value;
  }
}
