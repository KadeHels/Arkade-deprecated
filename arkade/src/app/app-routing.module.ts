import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { GravityCalcComponent } from './components/gravity-calc/gravity-calc.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  // Defaults
  { path: '', component: HomeComponent },
  { path: 'gravity', component: GravityCalcComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
