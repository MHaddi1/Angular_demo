import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
{path:' ',component:TopheadingComponent},//home
{path:'Tech',component:TechnewsComponent}//technews
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
