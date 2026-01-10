import { Component } from '@angular/core';
import { DegreeResponse } from '../models/degree.interface';
import { DegreeService } from '../degree.service';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatInputModule, FormsModule,MatFormFieldModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apiResponse!:DegreeResponse;
  userPrompt:string="";
  constructor(private degreeService:DegreeService){}
generateDegree(){
  let prompt = `${this.userPrompt}`;
  console.log(prompt);
 this.degreeService.getDegreeRecommendations(this.userPrompt).subscribe(result=>{
  this.apiResponse = result;
 })
};
}
