import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DashboardComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login(): void {
    if (this.email.toLowerCase() === 'vpvolkswagem@test.com' && this.password === 'VW12345') {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Email ou senha incorretos.';
    }
  }
}
