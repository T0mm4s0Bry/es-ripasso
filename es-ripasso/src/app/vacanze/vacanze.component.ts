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
    {nome:'messico',immagine:'https://images.musement.com/cover/0002/99/mexico-city-xl-jpg_header-198157.jpeg',control:false,nazione:'messico' ,capitale:'città del messico' ,abitanti:'127,5 milioni (2022)'},
    {nome:'roma',immagine:'https://www.roma.com/wp-content/uploads/2021/01/Roma-Roma-com.jpg',control:false, nazione:'italia' ,capitale:'roma' ,abitanti:'2,873 milioni (2017)' },
    {nome:'brasile',immagine:'https://stories.weroad.it/wp-content/uploads/2022/04/agustin-diaz-gargiulo-7F65HDP0-E0-unsplash-1620x1080.jpg',control:false,nazione:'brasile' ,capitale:'brasilia' ,abitanti:'215,3 milioni (2022)' },
  ]
  bottone(vacanze:{nome:string}){
    if(vacanze.nome=="messico"){
      this.vacanze[0].control=true
    }else if(vacanze.nome=="roma"){
      this.vacanze[1].control=true
    }else if(vacanze.nome=="brasile"){
      this.vacanze[2].control=true
    }
  }
  home(){
    this.vacanze[0].control=false
    this.vacanze[1].control=false
    this.vacanze[2].control=false
  }
}
