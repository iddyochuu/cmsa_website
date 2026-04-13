import { Component } from '@angular/core';
import { Topbar } from "../topbar/topbar";
import { Navbar } from "../navbar/navbar";
import { AuthRoutingModule } from "../../../auth/auth-routing-module";
import { Footer } from "../footer/footer";
import { Copyright } from "../copyright/copyright";

@Component({
  selector: 'app-main',
  imports: [Topbar, Navbar, AuthRoutingModule, Footer, Copyright],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
