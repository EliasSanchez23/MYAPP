import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(private router: Router) {}

  resetPassword() {
    if (this.email) {
      // Implementar lógica de envío del enlace de restablecimiento de contraseña
      alert('Reset link sent to ' + this.email);
      this.router.navigate(['/login']);
    } else {
      // Manejar error si el email no está ingresado
      alert('Please enter your email');
    }
  }
}


