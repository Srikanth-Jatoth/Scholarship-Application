import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule
  ],
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z6">
      <span>Scholarship Portal</span>
      <span class="toolbar-spacer"></span>
      <button mat-button routerLink="/login">Login</button>
      <button mat-button routerLink="/apply">Apply</button>
    </mat-toolbar>
    
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .toolbar-spacer {
      flex: 1 1 auto;
    }
    :host {
      display: block;
      min-height: 100vh;
      background-color: #f5f5f5;
    }
  `]
})
export class AppComponent {}
