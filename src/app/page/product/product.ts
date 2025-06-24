import { Component } from '@angular/core';
import { Productcard } from '../../productcard/productcard';

@Component({
  selector: 'app-product',
               
  imports: [Productcard],          
  templateUrl: './product.html',
  styleUrls: []     
})
export class Product {}            
