import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StarComponent implements OnChanges {
  @Input()
  rating: number = 0;
  starWidth: number = 0;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 74) / 5;
  }
}
