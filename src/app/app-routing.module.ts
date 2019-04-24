import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { InsectListComponent } from './insect-list/insect-list.component';
import { PlacetypeListComponent } from './placetype-list/placetype-list.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { TrapComponent } from './trap/trap.component';
import { CapturedInsectComponent } from './captured-insect/captured-insect.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'logout', component: LogoutComponent},
  { path:'profile', component: ProfileComponent},
  { path:'users', component: UserListComponent },
  { path:'plant', component: PlaceListComponent },
  { path:'insect', component: InsectListComponent },
  { path:'place', component: PlaceListComponent },
  { path:'project', component: ProjectComponent },
  { path:'place-type', component: PlacetypeListComponent },
  { path:'trap', component: TrapComponent },
  { path:'captured-insect', component: CapturedInsectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
