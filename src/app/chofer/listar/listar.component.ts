import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chofer } from 'src/app/Models/Chofer';
import { ChoferService } from 'src/app/services/chofer.service';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  update!: boolean;
  newchofer: Chofer = {
    codigo: 8,
    cedula: '0706144284',
    nombres: 'Kevin Steven',
    apellidos: 'Zambrano Macas',
    fechaNacimiento: new Date('2000-10-12'),
    aniosConduccion: 10
  };
  title!: string;
  tipoT!: string;
  description!: string;
  @ViewChild('liveToast') liveToast!: ElementRef;
  
  get ListaChoferes() {
    return this.choferService.getListaChoferes;
  }
  
  constructor(private choferService: ChoferService) { }
  
  ngOnInit() {
    this.update = false;
  }
  
  showToast() {
    const toast = new Toast(this.liveToast.nativeElement);
    toast.show();
  }
  
  editarChofer(chofer: Chofer) {
    this.update = true;
    this.newchofer = { ...chofer };
  }
  
  eliminarChofer(chofer: Chofer) {
    this.choferService.eliminarChofer(chofer);
    this.title = 'Choferes';
    this.tipoT = 'Eliminar';
    this.description = 'Chofer Eliminado';
    this.showToast();
  }
  
}
