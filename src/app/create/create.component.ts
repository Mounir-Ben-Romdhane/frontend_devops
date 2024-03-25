// src/app/create/create.component.ts

import { Component } from '@angular/core';
import { UniversityService } from '../university.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  universite: any = {}; // Define a generic object to store form data

  constructor(private universityService: UniversityService, private router: Router) { }

  addUniversite(): void {
    // Implement your create logic here
    console.log(this.universite); // Log the data for testing
    // Example: Call a service method to create data
     this.universityService.add(this.universite)
       .subscribe(() => {
         this.router.navigate(['/read']); // Navigate back to the read page after creation
       });
  }
}
