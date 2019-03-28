import { Component, OnInit, Input } from '@angular/core';
import { Pocion } from '../pocion.model';
import { Router } from '@angular/router';
import { PocionService } from '../pocion.service';

@Component({
  selector: 'app-pocion-grid',
  templateUrl: './pocion-grid.component.html',
  styleUrls: ['./pocion-grid.component.css']
})
export class PocionGridComponent implements OnInit {

  @Input() listaPociones: Pocion[];
  @Input() acciones: boolean;
  constructor(private router: Router,private _pocionService: PocionService) { }

  ngOnInit() {
  }

  //Funcion para navegar a el pocionDetail
  verMas(id: number) {
    //this.router.navigate(['/pocion',id]);
  }
  borrarPocion(id: number) {
    this._pocionService.eliminarPocion(id).subscribe(
      res=>{

      },
      err=>{
        console.log(err);
      }
    );


    this._pocionService.getAllPociones().subscribe(
      res=>{
        console.log("Refresh");
        this.listaPociones = res;
      },
      err=>{
        console.log("Refres"+err);
        
      }
    );
  }

  // Funcion para añadir animacion a las pociones epicas
  animacion(epic: boolean) {
    if (epic) {
      return "imgPocion";
    } else {
      return "img";
    }
  }

}
