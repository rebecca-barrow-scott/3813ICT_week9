import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProdComponent } from './add-prod/add-prod.component';
import { EditProdComponent } from './edit-prod/edit-prod.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addprod', component: AddProdComponent},
  {path: 'editprod/:id', component: EditProdComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
