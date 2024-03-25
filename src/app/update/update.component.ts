// src/app/update/update.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: any;
  universite: any = {};

  constructor(private route: ActivatedRoute, private universityService: UniversityService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Get the id from the route parameters
    // Fetch existing data using the id
    this.universityService.getById(this.id)
       .subscribe(data => {
         this.universite = data;
       });
  }

  updateUniversite(): void {
    // Implement your logic to update university here
    console.log(this.universite); // Log the form data for testing
    // Example: Call a service method to update university
     this.universityService.update(this.id, this.universite)
       .subscribe(() => {
         this.router.navigate(['/read']); // Navigate back to the universities page after updating
       });
  }
}
