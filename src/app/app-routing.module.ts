import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { DeleteRestaurentComponent } from './delete-restaurent/delete-restaurent.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { ViewRestaurentComponent } from './view-restaurent/view-restaurent.component';

// defining the path for component here   (john)
const routes: Routes = [
  // RestaurentListComponent
  {
    path:'', component:RestaurentListComponent
  },
  // ViewRestaurentComponent
  {
    path:'view-restaurent/:id', component:ViewRestaurentComponent
  },
// AddRestaurentComponent
{
  path:'add-restaurent', component:AddRestaurentComponent
},
// UpdateRestaurentComponent
{
  path:'update-restaurent/:id', component:UpdateRestaurentComponent
},
// DeleteRestaurentComponent
{
  path:'delete-restaurent/:id', component:DeleteRestaurentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
