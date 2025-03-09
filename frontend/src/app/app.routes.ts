import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { NoAuthGuard } from './guards/no-auth/no-auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canActivate: [NoAuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
];
