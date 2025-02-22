import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/services/residence.service';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence: Residence | undefined;

  constructor(
    private route: ActivatedRoute,
    private residenceService: ResidenceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe(params => {
      const residenceId = Number(params.get('id'));
      if (!isNaN(residenceId)) {
        this.residence = this.residenceService.getResidenceById(residenceId);
      }
    });
  }

  goToNextResidence(): void {
    if (this.residence) {
      const nextId = this.residence.id + 1;
      const nextResidence = this.residenceService.getResidenceById(nextId);

      if (nextResidence) {
        // Navigate to the next residence details
        this.router.navigate(['/residence-details', nextId]);
      } else {
        // Handle case when next residence is not found
        alert('This is the last residence.');
      }
    }
  }

  // Navigate to the AddResidence component
  goToAddResidence(): void {
    this.router.navigate(['/AddResidences']);
  }

  // Navigate to the AddResidence component with the current residence ID for updating
  goToUpdateResidence(residenceId: number): void {
    this.router.navigate(['/AddResidences', residenceId]);
  }
}