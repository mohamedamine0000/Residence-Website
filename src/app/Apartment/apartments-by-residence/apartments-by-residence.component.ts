import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent {
 constructor( private router: Router) {}
   
  AddApartment(): void {
    this.router.navigate(['/AddApartment']);
  }
}
