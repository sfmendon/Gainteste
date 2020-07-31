import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquivosComponent } from './arquivos/arquivos.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArquivosController } from './arquivos/arquivos.controller';
import { ResumoOrdensCorretoraComponent } from './ordens/corretora/resumoOrdensCorretora/resumoOrdensCorretora.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
      path: 'arquivos',
      component: ArquivosComponent,
      // loadChildren: () => import('./arquivos/ordem.module').then(m => m.OrdemModule)
  }
  // ,
  // {
  //     path: 'painel',
  //     loadChildren: () => import('./painel/painel.module').then(m => m.PainelModule)
  // }

];



@NgModule({
  declarations: [
     ArquivosComponent
    , DashboardComponent
    , ResumoOrdensCorretoraComponent
  ],
  imports: [
      RouterModule.forChild(routes)
      , CommonModule
      , NgxDropzoneModule
      , MatTableModule
      , MatInputModule
      , MatSelectModule
  ],
  providers: [
      ArquivosController
      , { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },

  ],

})
export class ComponentsModule { }
