import { Component } from '@angular/core';
import { SecondComponent } from '../second-component/second-component';
import {ThirdComponent} from '../third-component/third-component'
@Component({
  imports: [SecondComponent, ThirdComponent],
  selector: 'app-first-component',
  styleUrl: './first-component.css',
  templateUrl: './first-component.html',
})
export class FirstComponent {}
