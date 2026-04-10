import { Component, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  protected readonly title = signal('cmsa_website');

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof $ !== 'undefined') {
        $(".header-carousel").owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          smartSpeed: 1000,
          dots: true,
          nav: true
        });
      }
    }, 500);
  }
}