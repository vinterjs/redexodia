import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    console.log('hola');
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = window.document.getElementById('header');
    const logo = window.document.getElementById('logoHeader');
    const divHeader = window.document.getElementById('bgHeader');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      if (header !== null) {
        //header.classList.add('inset-x-0');
        logo?.classList.add('w-[40px]');
        divHeader?.classList.add('bg-black');
      }
      
    } else {
      if (header !== null) {
        //header.classList.remove('inset-x-0');
        logo?.classList.remove('w-[40px]');
        divHeader?.classList.remove('bg-black')
      }
    }
  }

}
