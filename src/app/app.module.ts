import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { AddComponent } from './place-list/add/add.component';
import { InsectListComponent } from './insect-list/insect-list.component';
import { AddInsectComponent } from './insect-list/add-insect/add-insect.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { AddPlantComponent } from './plant-list/add-plant/add-plant.component';
import { GeoPlaceListComponent } from './geo-place-list/geo-place-list.component';
import { AddGeoPlaceComponent } from './geo-place-list/add-geo-place/add-geo-place.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './user-list/add-user/add-user.component';
import { PlacetypeListComponent } from './placetype-list/placetype-list.component';
import { AddTypeComponent } from './placetype-list/add-type/add-type.component';
import { ProfileComponent } from './profile/profile.component';
import { TrapComponent } from './trap/trap.component';
import { CapturedInsectComponent } from './captured-insect/captured-insect.component';
import { LogoutComponent } from './logout/logout.component';
import { ProjectComponent } from './project/project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './shared/login.service';
import { PlaceService } from './shared/place.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    PlaceListComponent,
    AddComponent,
    InsectListComponent,
    AddInsectComponent,
    PlantListComponent,
    AddPlantComponent,
    GeoPlaceListComponent,
    AddGeoPlaceComponent,
    UserListComponent,
    AddUserComponent,
    PlacetypeListComponent,
    AddTypeComponent,
    ProfileComponent,
    TrapComponent,
    CapturedInsectComponent,
    LogoutComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
