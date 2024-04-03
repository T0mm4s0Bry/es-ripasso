import { Component } from '@angular/core';
import { app } from '../../../server';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacanze',
  standalone: true,
  imports: [VacanzeComponent,CommonModule],
  templateUrl: './vacanze.component.html',
  styleUrl: './vacanze.component.css'
})
export class VacanzeComponent {

  vacanze=[
    {nome:'citta del messico',immagine:'https://images.musement.com/cover/0002/99/mexico-city-xl-jpg_header-198157.jpeg',control:false, costo:'500€' },
    {nome:'citta del messico',immagine:'https://images.musement.com/cover/0002/99/mexico-city-xl-jpg_header-198157.jpeg',control:false, costo:'500€' },
    {nome:'citta del messico',immagine:'https://images.musement.com/cover/0002/99/mexico-city-xl-jpg_header-198157.jpeg',control:false, costo:'500€' },
  ]
  bottone(vacanze:{nome:string}){
    if(vacanze.nome=="citta del messico"){
      this.vacanze[0].control=true
    }else if(vacanze.nome=="citta del messico"){
      this.vacanze[1].control=true
    }else if(vacanze.nome=="citta del messico"){
      this.vacanze[2].control=true
    }
  }
  home(){
    this.vacanze[0].control=false
    this.vacanze[1].control=false
    this.vacanze[2].control=false
  }
}
