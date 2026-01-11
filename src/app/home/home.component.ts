import { Component } from '@angular/core';
import { Degree, DegreeResponse } from '../models/degree.interface';
import { DegreeService } from '../degree.service';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatButtonModule,MatChipsModule,MatInputModule, FormsModule,MatFormFieldModule,CommonModule,MatCardModule,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  apiResponse!:DegreeResponse;
  userPrompt:string="";
  loading:boolean=false;
  degrees:Degree[]=[];

  constructor(
    private degreeService:DegreeService,
    private router:Router
  ){}
  ngOnInit(): void {
    const state = history.state;
  if (state.degrees) {
    this.apiResponse = { degrees: state.degrees };
    }
  }

  viewDegreeDetails(degree: Degree, index: number): void {
    this.router.navigate(['/degree', index], {
      state: { degree, degrees: this.apiResponse.degrees }
    });
  }

  generateDegree() {
    if (!this.userPrompt.trim()) {
      return;
    }
  
    this.loading = true;

    this.degreeService.getDegreeRecommendations(this.userPrompt).subscribe({
      next: (result) => {
    
        this.apiResponse = result;
  
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching degree recommendations:', error);
        this.loading = false;
      }
    });
  }
  
/* old og code:

generateDegree(){
  let prompt = `${this.userPrompt}`;
  console.log(prompt);
 this.degreeService.getDegreeRecommendations(this.userPrompt).subscribe(result=>{
  this.apiResponse = result;
 })
};

searchDegrees(): void {
  if (!this.userPrompt.trim()) {
    return;
  }

  this.loading = true;
  this.degreeService.getDegreeRecommendations(this.userPrompt).subscribe({
    next: (response) => {
      this.degrees = response.degrees;
      this.loading = false;
    },
    error: (error) => {
      console.error('Error fetching degree recommendations:', error);
      this.loading = false;
    }
  });
} */

}
