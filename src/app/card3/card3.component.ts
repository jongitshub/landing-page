import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card3',
  styleUrl: 'card3.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
  <mat-card class="example-card" appearance="outlined">
    <mat-card-header>
      <mat-card-title>Dog Boarding!</mat-card-title>
      <mat-card-subtitle style="padding-bottom: 15px;">
        All dog breeds are welcome!</mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image src="https://images.fineartamerica.com/images-medium-large-5/dog-and-suitcase-mats-silvan.jpg" 
    >
    <mat-card-content style="padding-top: 10px;">
      <p>
        Planning a trip? Give your furry friend the care and attention they deserve with my cozy dog boarding services!
      </p>
    </mat-card-content>
    <mat-card-footer>
      <a routerLink="boarding" style="padding-left: 10px; padding-bottom: 10px;">Schedule your dates here!</a>
    </mat-card-footer>
  </mat-card>
  `
})
export class CardsComponent3 {}
