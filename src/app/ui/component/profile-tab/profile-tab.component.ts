import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../core/service/notification-service";
import {AuthService} from "../../../core/auth/auth-service";
import {ProfileForm} from "../../../core/model/user";
import {UserService} from "../../../core/service/user-service";
import {ExceptionData} from "../../../core/model/exception";

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {
  public profileForm!: FormGroup;

  constructor(private readonly notificationService: NotificationService,
              private readonly authService: AuthService,
              private readonly userService: UserService) {
    this.profileForm = new FormGroup({
      surname: new FormControl('', []),
      name: new FormControl('', []),
      patronymic: new FormControl('', []),
      phone: new FormControl('', []),
      email: new FormControl('', [Validators.email]),
      date: new FormControl('', [])
    });
  }

  public ngOnInit(): void {
    this.userService.getProfile(this.authService.getUsername()).subscribe({
      next: (data: any): void => {
        this.profileForm = new FormGroup({
          surname: new FormControl(data.surname, []),
          name: new FormControl(data.name, []),
          patronymic: new FormControl(data.patronymic, []),
          phone: new FormControl(data.phone, []),
          email: new FormControl(data.email, [Validators.email]),
          date: new FormControl(data.dateOfBirth, [])
        });
      },
    })
  }

  public saveProfile(): void {
    if (!this.profileForm.invalid) {
      let form: ProfileForm = {
        surname: this.profileForm.controls['surname'].value,
        name: this.profileForm.controls['name'].value,
        patronymic: this.profileForm.controls['patronymic'].value,
        phone: this.profileForm.controls['phone'].value,
        email: this.profileForm.controls['email'].value,
        dateOfBirth: this.profileForm.controls['date'].value,
        username: this.authService.getUsername(),
      }

      this.userService.updateProfile(form).subscribe({
        next: (data: any): void => {
          this.profileForm = new FormGroup({
            surname: new FormControl(data.surname, []),
            name: new FormControl(data.name, []),
            patronymic: new FormControl(data.patronymic, []),
            phone: new FormControl(data.phone, []),
            email: new FormControl(data.email, [Validators.email]),
            date: new FormControl(data.dateOfBirth, [])
          });
          this.notificationService.primary('Профиль обновлён')
        },
        error: (data: ExceptionData): void => {
          this.notificationService.error(`Не удалось обновить профиль. ${data.title}. ${data.detail}.`)
        }
      })
    }
  }

  public deleteProfile(): void {
    this.userService.deleteProfile(this.authService.getUsername()).subscribe({
      next: (): void => {
        this.authService.logout();
        this.notificationService.primary('Профиль удалён')
      },
      error: (): void => {
        this.notificationService.error('Не удалось удалить профиль')
      }
    })
  }

  public logout(): void {
    this.authService.logout();
  }
}
