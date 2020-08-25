import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ThumbnailStoreComponent } from "../app/thumbnail-store/thumbnail-store.component";

const routes: Routes = [
  {path: '', component:WelcomeComponent},
  {path:'user-details', component:UserDetailsComponent},
  {path:'thumbnail', component:ThumbnailStoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
