import { Component, Input, signal, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styles: ``,
})
export class RatingComponent implements OnChanges {
  public fullStars = signal<number[]>([]);
  public halfStar = signal<boolean>(false);
  public emptyStars = signal<number[]>([]);

  @Input() rating = 0;

  public getRating() {
    const fullStarsCount: number = Math.floor(this.rating);
    const halfStarCount: number = this.rating % 1 >= 0.5 ? 1 : 0;
    const emptyStarsCount: number = 5 - fullStarsCount - halfStarCount;

    this.fullStars.set(Array(fullStarsCount).fill(1));
    this.halfStar.set(halfStarCount === 1);
    this.emptyStars.set(Array(emptyStarsCount).fill(0));

    return {
      fullStars: fullStarsCount,
      halfStar: halfStarCount,
      emptyStars: emptyStarsCount,
    };
  }

  ngOnChanges(){
    this.getRating();
  }
}
