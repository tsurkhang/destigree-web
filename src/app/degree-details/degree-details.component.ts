import { Component, OnInit } from '@angular/core';
import { Degree } from '../models/degree.interface';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-degree-details',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatChipsModule,MatIconModule,CommonModule],
  templateUrl: './degree-details.component.html',
  styleUrl: './degree-details.component.css'
})
export class DegreeDetailsComponent implements OnInit{
  degree?: Degree;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Get degree data from navigation state
    const navigation = history.state;
    if (navigation && navigation.degree) {
      this.degree = navigation.degree;
    }
  }

  goBack(): void {
    this.location.back();
  }

}
