import { Component, OnInit } from '@angular/core';
import { PocionService } from '../pocion.service';
import { Pocion } from '../pocion.model';

@Component({
  selector: 'app-pocion-list',
  templateUrl: './pocion-list.component.html',
  styleUrls: ['./pocion-list.component.css']
})
export class PocionListComponent implements OnInit {

  pociones:Pocion[];

  constructor(private _pocionService: PocionService) { 
    
    this._pocionService.getAllPociones().subscribe(
      result=>{
        this.pociones = result;
        console.log(this.pociones);
      },
      err=>{
        console.log("getAllPociones"+ err);
      },

    );
  }

  ngOnInit() {
  }

}
