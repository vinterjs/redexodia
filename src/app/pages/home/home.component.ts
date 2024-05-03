import { Component } from '@angular/core';
import { CarouselBannerComponent } from '../../components/carousel-banner/carousel-banner.component';
import { LoaderSpinComponent } from '../../components/loader-spin/loader-spin.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselBannerComponent, LoaderSpinComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
