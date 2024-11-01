import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FieldsComponent } from "../fields/fields.component";
import { CalendarComponent } from "../calendar/calendar.component";

@Component({
  selector: 'sitting',
  templateUrl: 'sitting.component.html',
  styleUrl: 'sitting.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,
    FieldsComponent, CalendarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SittingComponent {
}



