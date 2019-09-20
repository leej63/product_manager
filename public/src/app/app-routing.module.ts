import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
{ path: 'products', component: ProductsComponent },
{ path: '', component: HomeComponent},
{ path: 'products/edit/:id', component: EditFormComponent},
{ path: 'products/new', component: CreateFormComponent},
// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
