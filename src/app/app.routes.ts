import { Routes } from '@angular/router';

import { Productcard } from './productcard/productcard';
import { Product } from './page/product/product';
import { Home } from './page/home/home';
import { About } from './page/about/about';


export const routes: Routes = [{ path:'', component: Home},{ path:'product', component: Product},{ path:'home', component: Home},{ path:'about', component: About},];
