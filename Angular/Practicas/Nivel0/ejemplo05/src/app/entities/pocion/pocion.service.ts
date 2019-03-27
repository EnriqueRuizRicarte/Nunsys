import { Injectable } from '@angular/core';
import { Pocion } from './pocion.model';

@Injectable({
  providedIn: 'root'
})
export class PocionService {
  pociones:Pocion[]=[
    {id:"1",nombre:"Mana",descripcion:"Aumenta la magia, etc",URLimg:"././assets/imgs/pociones/t_03.PNG",epic:true},
    {id:"2",nombre:"Vida",descripcion:"Aumenta la Vida, etc",URLimg:"././assets/imgs/pociones/t_04.PNG",epic:false},
    {id:"3",nombre:"Energia",descripcion:"Aumenta la Energia, etc",URLimg:"././assets/imgs/pociones/t_05.PNG",epic:false},
    {id:"4",nombre:"Fuerza",descripcion:"Aumenta la Fuerza, etc",URLimg:"././assets/imgs/pociones/t_01.PNG",epic:false},
    {id:"5",nombre:"Invisibilidad",descripcion:"Desapareces , etc",URLimg:"././assets/imgs/pociones/t_02.PNG",epic:true},
];
  constructor() { }
  getAllPociones(){
    return this.pociones;
  }
}
