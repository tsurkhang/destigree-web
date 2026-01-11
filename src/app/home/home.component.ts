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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,MatChipsModule,MatInputModule, FormsModule,MatFormFieldModule,CommonModule,MatCardModule,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apiResponse!:DegreeResponse;
  userPrompt:string="";
  loading:boolean=false;
  degrees:Degree[]=[];

  constructor(
    private degreeService:DegreeService,
    private router:Router
  ){}

  viewDegreeDetails(degree: Degree, index: number): void {
    this.router.navigate(['/degree', index], { state: { degree } });
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
