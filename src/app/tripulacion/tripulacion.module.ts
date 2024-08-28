import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripulacionService } from '../services/tripulacion.service';



@NgModule({
  declarations: [
    ListarComponent,
    AgregarComponent,
    PrincipalComponent
  ],
  exports: [
    ListarComponent, AgregarComponent, PrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TripulacionService
  ]
})
export class TripulacionModule { }
