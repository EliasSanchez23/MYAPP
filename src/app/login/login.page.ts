import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Implementar lógica de autenticación aquí
    if (this.email && this.password) {
      // Redirigir a la página de inicio si las credenciales son correctas
      this.router.navigate(['/home']);
    } else {
      // Manejar error de inicio de sesión
      alert('Please enter valid credentials');
    }
  }
}

