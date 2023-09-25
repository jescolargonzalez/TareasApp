import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareasComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea: '' = "";

  constructor(){

  }

  ngOnInit(): void {

  }

  agregarTarea(){
    //0 Prueba comunicacion.
    //console.log(this.nombreTarea);
    //1 Crea un obj Tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    //2 Agregar objeto tarea al array
    this.listTareas.push(tarea);
    //3 Reset Form
    this.nombreTarea = "";
    //4 Verificamos que se haya guardado en el array.
    console.log(this.listTareas);
  }


  eliminarTarea(index: number): void{
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(index: number,tarea: Tarea): void {
    this.listTareas[index].estado = !tarea.estado
  }
  

}
