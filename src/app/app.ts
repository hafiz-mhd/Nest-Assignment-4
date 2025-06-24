import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Productcard } from './productcard/productcard';  
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  
  imports: [Navbar,RouterOutlet, RouterLink ,Footer],  
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'ecommerce';
}
