import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  universities: any[] = [];

  constructor(private universityService: UniversityService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.universityService.getAll()
      .subscribe(universities => this.universities = universities);
  }

  delete(id: number): void {

    if (confirm('Are you sure you want to delete this university?')) {
      this.universityService.delete(id)
        .subscribe(() => {
          this.getAll(); // Refresh the list after deletion
        });
    }
  }

  goToUpdate(id: number): void {
    this.router.navigate(['/update', id]);
  }

  goToAdd(): void {
    this.router.navigate(['/create']);
  }
}
