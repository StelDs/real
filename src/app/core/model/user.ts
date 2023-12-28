export namespace User {
  export interface ProfileForm {
    surname: string;
    name: string;
    patronymic: string;
    phone: string;
    email: string;
    date: string;
  }

  export interface RegistrationForm {
    login: string;
    phone: string;
    email: string;
    password: string;
  }

  export interface LoginForm {
    login: string;
    password: string;
  }

  export interface TokenRequest {
    access: string;
    refresh: string;
  }
}
