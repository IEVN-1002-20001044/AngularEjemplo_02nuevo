import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{

  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImg:Boolean=true;
  listFilter:string='';
  alumnoTitle!:string;
  dataSourse:any=[];

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:AlumnosUtl[]=[
    {
      matricula:1234,
      nombre:'pau',
      apaterno:'roc',
      amaterno:'oro',
      correo:'pau@correo.com'

    },
    {
      matricula:5678,
      nombre:'Han',
      apaterno:'Jisung',
      amaterno:'Ace',
      correo:'han@correo.com'
    },
    {
      matricula:6513,
      nombre:'Minho',
      apaterno:'Lee',
      amaterno:'Know',
      correo:'lk@correo.com'
    }
  ]

  ngOnInit(): void{
    this.dataSourse=this.alumnosIric

  }
}
