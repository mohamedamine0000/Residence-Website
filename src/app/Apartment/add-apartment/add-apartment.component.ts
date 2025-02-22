import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {

  apartForm: FormGroup;

  constructor() {
    this.apartForm = new FormGroup({
      ApartmentNumber: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      FloorNumber: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      Surface: new FormControl('', Validators.required),
      Terrace: new FormControl('', Validators.required),
      SurfaceTerrace: new FormControl({ value: '', disabled: true }, Validators.required),
      Category: new FormControl('', Validators.required),
      Residence: new FormControl('', Validators.required),
    });

    this.apartForm.get('Terrace')?.valueChanges.subscribe((value) => {
      if (value === 'yes') {
        this.apartForm.get('SurfaceTerrace')?.enable();
        this.apartForm.get('SurfaceTerrace')?.setValidators([Validators.required]);
      } else {
        this.apartForm.get('SurfaceTerrace')?.disable();
        this.apartForm.get('SurfaceTerrace')?.clearValidators();
      }
      this.apartForm.get('SurfaceTerrace')?.updateValueAndValidity();
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.apartForm.markAllAsTouched(); 
    if (this.apartForm.valid) {
      console.log(this.apartForm.value);
    }
  }
  

  onReset() {
    this.apartForm.reset();
  }
}