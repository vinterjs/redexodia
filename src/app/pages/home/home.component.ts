import { Component } from '@angular/core';
import { CarouselBannerComponent } from '../../components/carousel-banner/carousel-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
