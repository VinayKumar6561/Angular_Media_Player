import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';  
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Call backend API
      this.authService.login(username, password).subscribe({
        next: (res) => {
          console.log('JWT Token:', res.token);
          this.authService.saveToken(res.token); // Save token for later use
          alert('Login successful ');
        },
        error: (err) => {
          console.error('Login failed:', err);
          alert('Login failed ');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  isInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
