import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card1',
  styleUrl: 'card1.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
  <mat-card class="example-card" appearance="outlined">
    <mat-card-header>
      <mat-card-title>Dog Sitting!</mat-card-title>
      <mat-card-subtitle style="padding-bottom: 15px;">
        in the Lovely City of Tampa</mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ-v6f_mFc0Cm2t8TfKk9MSABTlVcyD_hYrIR7EHY1O9ii7JN8iUFkYLsiMtbmxCM_6bE7bS7ziPF6hfDjNHgVpy-a3uVVTb-spvFcgLA" 
    >
    <mat-card-content style="padding-top: 10px;">
      <p>
        Are you going on vacation or need someone to care 
        for your furry friend while you're away? Look no further!
         I offer loving and reliable dog sitting services to ensure 
         your pup is happy and well-cared for.
      </p>
    </mat-card-content>
    <mat-card-footer>
      <a routerLink="sitting" style="padding-left: 10px;">Learn More</a>
    </mat-card-footer>
  </mat-card>
  `,
})
export class CardsComponent {}
