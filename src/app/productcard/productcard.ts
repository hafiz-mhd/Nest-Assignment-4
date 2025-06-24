import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServices } from '../apiservices';

@Component({
  selector: 'app-productcard',
  
  imports: [CommonModule], 
  templateUrl: './productcard.html',
  styleUrls: ['./productcard.css']
})
export class Productcard implements OnInit {
  products: any[] = [];

  constructor(private apiservice: ApiServices) {}

  ngOnInit() {
     console.log('Productcard initialized');
    this.apiservice.getproduct().subscribe({
      next: (data: any) => {
      console.log('API response:', data);
      this.products = data;
    },
   error: (err) => {
        console.error('Error loading data', err);
      }
    });
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
} 