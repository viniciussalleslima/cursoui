import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListacursosComponent } from './listacursos/listacursos.component';

import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ListacursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule
    ]
})
export class CursosModule { }
