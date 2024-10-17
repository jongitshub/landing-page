import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'sitting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl:'./sitting.component.html',
  styleUrl: './sitting.component.css'
})
export class SittingComponent {
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
});

}
