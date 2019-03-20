import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookstoreComponent } from './bookstore/bookstore.component';

const routes: Routes = [
  { path: 'bookstore', component: BookstoreComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
