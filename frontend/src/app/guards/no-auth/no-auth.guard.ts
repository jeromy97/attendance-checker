import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // if the user is logged in, send him to the dashboard
      this.router.navigate(['/dashboard']);
      return false;
    }
    // otherwise show the login page
    console.log('halo');
    return true;
  }
}
