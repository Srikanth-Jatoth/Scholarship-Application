import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScholarshipFormComponent } from './scholarship-form/scholarship-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'apply', component: ScholarshipFormComponent }
];
