import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {dateValidator} from "../../../util/config/date-validator";
import {User} from "../../../core/model/user";
import {NotificationService} from "../../../core/service/notification-service";
import {AuthService} from "../../../core/auth/auth-service";

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {
  public profileForm!: FormGroup;

  constructor(private readonly notificationService: NotificationService,
              private readonly authService: AuthService) {
    this.profileForm = new FormGroup({
      surname: new FormControl('Смирнов'),
      name: new FormControl('Даниил'),
      patronymic: new FormControl('Ярославович'),
      phone: new FormControl('+79304160842', [Validators.pattern('[- +()0-9]{12}')]),
      email: new FormControl('venart-2@yandex.ru', [Validators.required, Validators.email]),
      date: new FormControl('', [dateValidator()]),
    });
  }

  public ngOnInit(): void {
  }

  public saveProfile(): void {
    if (!this.profileForm.invalid) {
      let form: User.ProfileForm = {
        surname: this.profileForm.controls['surname'].value,
        name: this.profileForm.controls['name'].value,
        patronymic: this.profileForm.controls['patronymic'].value,
        phone: this.profileForm.controls['phone'].value,
        email: this.profileForm.controls['email'].value,
        date: this.profileForm.controls['date'].value,
      }
      //send
      this.notificationService.primary('Данные обновлены')
    }
  }

  public deleteProfile(): void {
    //sendDeleteProfile
    this.notificationService.primary('Профиль удалён')
    this.authService.logout();
  }
}
