import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { DegreeDetailsComponent } from './degree-details/degree-details.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'degree/:index', component: DegreeDetailsComponent }
]
