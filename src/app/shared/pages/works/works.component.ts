import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {



  constructor(private _CargarScripts:CargarScriptsService) {
    _CargarScripts.Carga(["works"]);
   }

  ngOnInit(): void {
    

  }
  GotoGit():void{
    console.log("click");
    
    var url = "https://github.com/facuzyli?tab=repositories";
    window.open(url, '_blank')


  }

}
