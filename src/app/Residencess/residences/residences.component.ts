import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResidenceService } from 'src/app/services/residence.service';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})


export class ResidencesComponent implements OnInit {
  searchTerm: string = '';
  listResidences: Residence[] = [];


  constructor(private residenceService: ResidenceService, private router: Router) {}

  ngOnInit(): void {
    this.listResidences = this.residenceService.getResidences();
  }

  toggleFavorite(residence: Residence) {
    residence.isFavorite = !residence.isFavorite;
  }

  toggleLocation(residence: Residence) {
    residence.showAddress = !residence.showAddress;
  }

  get filteredResidences() {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
  goToApartmentList(): void {
    this.router.navigate(['/ApartmentsRes']);
  }
}
