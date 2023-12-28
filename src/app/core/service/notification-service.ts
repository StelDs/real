import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {
  }

  public primary(message: string): void {
    this.snackBar.open(message, 'Закрыть',
      {
        panelClass: ['primary-snackbar'],
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      }
    );
  }

  public error(message: string): void {
    this.snackBar.open(message, 'Закрыть',
      {
        panelClass: ['error-snackbar'],
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      }
    );
  }

  public success(message: string): void {
    this.snackBar.open(message, 'Закрыть',
      {
        panelClass: ['success-snackbar'],
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      }
    );
  }
}
