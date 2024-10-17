import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card2',
  styleUrl: 'card2.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
  <mat-card class="example-card" appearance="outlined">
    <mat-card-header>
      <mat-card-title>Dog walking!</mat-card-title>
      <mat-card-subtitle style="padding-bottom: 15px;">
        Good exercise and stimulation = Happy dogs!</mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image src="https://us.images.westend61.de/0001547983pw/full-body-of-positive-young-fit-female-running-together-with-weimaraner-dog-during-outdoor-workout-in-park-ADSF22934.jpg"
    >
    <mat-card-content style="padding-top: 10px;">
      <p>
        Need a reliable dog walker? Look no further! I’m here to give your furry friend the exercise and attention they need while you're busy.
      </p>
    </mat-card-content>
    <mat-card-footer>
      <a routerLink="walking" style="padding-left: 10px;">Learn More</a>
</mat-card-footer>
  </mat-card>
  `
})
export class CardsComponent2 {}
