import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/services/residence.service';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceForm: FormGroup;
  isUpdateMode: boolean = false;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private residenceService: ResidenceService,
    private router: Router
  ) {
    // Initialisation du formulaire réactif
    this.residenceForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      image: new FormControl(''), // URL ou base64 de l'image
      status: new FormControl('Disponible'),
      showAddress: new FormControl(false),
      isFavorite: new FormControl(false),
      description: new FormControl('')
    });
  }

  ngOnInit(): void {
    // Vérifier si un ID est passé dans l'URL (mode mise à jour)
    const residenceId = Number(this.route.snapshot.paramMap.get('id'));
    if (residenceId) {
      const existingResidence = this.residenceService.getResidenceById(residenceId);
      if (existingResidence) {
        this.residenceForm.patchValue(existingResidence); // Remplir le formulaire avec les données existantes
        this.isUpdateMode = true;
      }
    }
  }

  // Gérer le changement de fichier (image)
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Convertir le fichier en base64 pour l'aperçu ou le stockage
      const reader = new FileReader();
      reader.onload = () => {
        this.residenceForm.get('image')?.setValue(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  // Soumettre le formulaire
  onSubmit(): void {
    this.residenceForm.markAllAsTouched(); // Marquer tous les champs comme touchés pour afficher les erreurs
    if (this.residenceForm.valid) {
      const residence: Residence = this.residenceForm.value;

      if (this.isUpdateMode) {
        // Mettre à jour la résidence existante
        this.residenceService.updateResidence(residence);
      } else {
        // Ajouter une nouvelle résidence
        this.residenceService.addResidence(residence);
      }

      this.router.navigate(['/residences']); // Rediriger vers la liste des résidences
    }
  }

  // Réinitialiser le formulaire
  onReset(): void {
    this.residenceForm.reset({
      id: 0,
      name: '',
      address: '',
      image: '',
      status: 'Disponible',
      showAddress: false,
      isFavorite: false,
      description: ''
    });
  }
}