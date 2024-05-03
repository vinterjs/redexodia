import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs'
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Banner } from '../../core/interfaces/banner';

@Component({
  selector: 'app-carousel-banner',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './carousel-banner.component.html',
  styleUrl: './carousel-banner.component.scss'
})
export class CarouselBannerComponent implements OnInit{
  banners = [
    {
      id_banner: "1",
      imagen_banner: "hola",
      titulo_banner: "hola",
      parrafo_banner: "hola",
      url_boton: "hola",
      texto_boton: "hola",
      activo_banner: true
    },
    {
      id_banner: "2",
      imagen_banner: "adios",
      titulo_banner: "adios",
      parrafo_banner: "adios",
      url_boton: "adios",
      texto_boton: "adios",
      activo_banner: true
    }
  ]
  
  ngOnInit(){
    
  }
  slideConfig = {
    "infinite": true,
    "arrows": false,
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "dots": false,
    "autoplay": true,
    "keyboard": false,
  };
}
