import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pociones Mágicas';
  pociones:String[] = new Array("poción de mana","poción de energia", "Poción de vida","Poción de vuelo","Poción de desaparición");

}
