import { Component } from '@angular/core';
import { Carousel } from "../carousel/carousel";
import { OurService } from "../our-service/our-service";
import { AboutUs } from "../about-us/about-us";
import { CustomerCenter } from "../customer-center/customer-center";
import { FrontBunner } from "../front-bunner/front-bunner";

@Component({
  selector: 'app-home',
  imports: [Carousel, OurService, AboutUs, CustomerCenter, FrontBunner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
