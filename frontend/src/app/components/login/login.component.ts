import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;

  email = new FormControl('');
  password = new FormControl('');

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login successfull', res);
          this.authService.setToken(res.access_token);
          this.router.navigate(['/dashboard']); // redirect on success
        },
        error: (err) => {
          console.error('Login failed', err);
        }
      });
    }
  }
}
