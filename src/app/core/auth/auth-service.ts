import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {getLoginUrl, getRegistrationUrl} from "../model/properties";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient,
              private readonly router: Router) {
  }

  /**
   * Установить refresh токен
   * @param refreshToken refresh токен
   * @private
   */
  private setRefreshToken(refreshToken: string): void {
    localStorage.setItem("refresh_token", refreshToken);
  }

  /**
   * Получить refresh токен
   */
  public getRefreshToken(): string {
    let refreshToken: string | null = localStorage.getItem("refresh_token");
    if (refreshToken == null)
      return '';
    return refreshToken;
  }

  /**
   * Установить access токен
   * @param accessToken access токен
   * @private
   */
  private setAccessToken(accessToken: string): void {
    localStorage.setItem("access_token", accessToken);
  }

  /**
   * Получить access токен
   */
  public getAccessToken(): string {
    let accessToken = localStorage.getItem("access_token");
    if (accessToken == null)
      return '';
    return accessToken;
  }

  /**
   * Установить время, когда действия токена истекает
   * @param expiresAt время, когда истекает действия токена
   * @private
   */
  private setAccessTokenExpiresAt(expiresAt: string): void {
    localStorage.setItem("expires_at", expiresAt);
  }

  /**
   * Получить время, когда действия токена истекает
   * @private
   */
  private getAccessTokenExpiresAt(): number {
    let expiresAt = localStorage.getItem("access_token");
    if (expiresAt == null)
      return 0;
    return Number(expiresAt);
  }

  public isAuthorized(): boolean {
    return this.getAccessToken() != '';
  }

  /**
   * Регистрация пользователя
   * @param form форма регистрации для отправки на сервер
   */
  public registration(form: User.RegistrationForm): void {
    this.http.post(getRegistrationUrl(), form).subscribe({
      next: (data: any): void => {
        this.setAccessToken(data.access)
        this.setRefreshToken(data.refresh)
        },
      error: err => {
        this.setAccessToken('fake')
        this.setRefreshToken('fake')
      }
    })
  }

  public login(form: User.LoginForm): void {
    this.http.post(getLoginUrl(), form).subscribe({
      next: (data: any): void => {
        this.setAccessToken(data.access)
        this.setRefreshToken(data.refresh)
      },
      error: err => {
        this.setAccessToken('fake')
        this.setRefreshToken('fake')
      }
    })
  }

  public logout(): void {
    this.setAccessToken('')
    this.setRefreshToken('')
    this.router.navigate(['/']).then()
  }
}
