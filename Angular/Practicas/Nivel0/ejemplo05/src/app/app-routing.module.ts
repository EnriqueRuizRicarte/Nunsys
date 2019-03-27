import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocionlistComponent } from './entities/pocion/pocionlist/pocionlist.component';

const routes: Routes = [
  {path: '',component: PocionlistComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
