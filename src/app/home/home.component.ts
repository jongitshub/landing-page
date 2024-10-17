import { Component } from '@angular/core';
import { CardsComponent } from '../card1/card1.component';
import { CardsComponent2 } from '../card2/card2.component';
import { CardsComponent3 } from '../card3/card3.component';
import { TopHeaderComponent } from '../top-header/top-header.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [TopHeaderComponent, CardsComponent, CardsComponent2, CardsComponent3],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
