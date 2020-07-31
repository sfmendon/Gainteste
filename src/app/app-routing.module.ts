import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';


const routes: Routes = [];

@NgModule({
  declarations: [

  ],
  imports: [RouterModule.forRoot(routes)
  , ComponentsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
