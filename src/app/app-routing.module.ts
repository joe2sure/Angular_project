import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportUiComponent } from './pages/sport-ui/sport-ui.component';

const routes: Routes = [
  {
    path: 'sports',
    component: SportUiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
