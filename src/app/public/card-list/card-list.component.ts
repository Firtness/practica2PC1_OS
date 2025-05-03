import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {UniversitiesApiService} from '../../universities/services/universities-api.service';
import {University} from '../../universities/model/university.entity';
import {CardItemComponent} from '../card-item/card-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [MatGridListModule, CardItemComponent, NgForOf],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',

})
export class UniversityListComponent implements OnInit {
  universities: University[] = [];
  isLoading = true;

  constructor(private universitiesService: UniversitiesApiService) {}

  ngOnInit(): void {
    this.universitiesService.getUniversities().subscribe({
      next: (data) => {
        this.universities = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching universities', err);
        this.isLoading = false;
      }
    });
  }
}
