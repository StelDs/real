import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
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
    let refreshToken = localStorage.getItem("refresh_token");
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
}
