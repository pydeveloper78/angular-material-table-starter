import { NgModule } from '@angular/core';      
import { RouterModule, Routes } from '@angular/router';
import { FlyersComponent  } from "./components/flyers/flyers.component";
import { FlyerDetailComponent  } from "./components/flyer-detail/flyer-detail.component";

const routes: Routes = [
  { path: '', component: FlyersComponent },
  { path: ':id', component: FlyerDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule {}