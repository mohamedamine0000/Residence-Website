import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './Residencess/residences/residences.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddApartmentComponent } from './Apartment/add-apartment/add-apartment.component';
import { ApartmentsComponent } from './Apartment/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartment/apartments-by-residence/apartments-by-residence.component';
import {AddResidenceComponent} from './Residencess/add-residence/add-residence.component';
import {ResidenceDetailsComponent } from './Residencess/residence-details/residence-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsListComponent } from './Apartment/apartments-list/apartments-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'residences', component: ResidencesComponent }, 
  { path: 'AddResidences', component: AddResidenceComponent }, 
  { path: 'residence-details/:id', component: ResidenceDetailsComponent },
  { path: 'ApartmentsRes', component: ApartmentsByResidenceComponent},
  { path: 'Apartments', component: ApartmentsListComponent},
  { path: 'AddApartments' , component: AddApartmentComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    AddApartmentComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddResidenceComponent,
    ResidenceDetailsComponent,
    ApartmentsListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  ,
    RouterModule.forRoot(routes),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
