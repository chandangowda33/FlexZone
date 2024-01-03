import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  choosenFeature: number = 1;

  onSelect(selectedNumber: number) {
    this.choosenFeature = selectedNumber;
  }
}
