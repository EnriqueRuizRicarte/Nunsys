import { Component, OnInit } from '@angular/core';
import { Pocion } from '../pocion.model';
import { PocionService } from '../pocion.service';

@Component({
  selector: 'app-pocionlist',
  templateUrl: './pocionlist.component.html',
  styleUrls: ['./pocionlist.component.css']
})
export class PocionlistComponent implements OnInit {

  title = 'lIsTa dE pOciOnEs';
  potinges:Pocion[];
  
  constructor(private _pocionSer:PocionService){
  this.potinges = _pocionSer.getAllPociones();
  }

  ngOnInit() {
  }

}
