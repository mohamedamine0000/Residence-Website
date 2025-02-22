import { Injectable } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  private listResidences: Residence[] = [
    { id: 1, name: "El Fel", address: "Borj Cedria", image: "../../assets/images/r1.jpg", status: "Disponible", showAddress: false, isFavorite: false, description: "It's very nice living here" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "../../assets/images/r2.jpg", status: "Disponible", showAddress: false, isFavorite: false, description: "It's very nice living here" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/r3.png", status: "Vendu", showAddress: false, isFavorite: false, description: "It's very nice living here" },
    { id: 4, name: "El Anber", address: "Inconnu", image: "../../assets/images/r4.jpg", status: "En Construction", showAddress: false, isFavorite: false, description: "It's very nice living here" }
  ];

  constructor() { }

  // Fetch the list of residences
  getResidences(): Residence[] {
    return this.listResidences;
  }

  // Fetch a single residence by its ID
  getResidenceById(id: number): Residence | undefined {
    return this.listResidences.find(residence => residence.id === id);
  }

  // Add a new residence
  addResidence(residence: Residence): void {
    residence.id = this.listResidences.length + 1; // Generate a new ID
    this.listResidences.push(residence);
  }

  // Update an existing residence
  updateResidence(updatedResidence: Residence): void {
    const index = this.listResidences.findIndex(residence => residence.id === updatedResidence.id);
    if (index !== -1) {
      this.listResidences[index] = updatedResidence;
    }
  }
}