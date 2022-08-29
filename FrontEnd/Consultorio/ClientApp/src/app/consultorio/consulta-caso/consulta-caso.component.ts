import { Component, OnInit } from '@angular/core';
import { Caso } from '../models/caso';
import { CasoService } from 'src/app/services/caso.service';

@Component({
  selector: 'app-consulta-caso',
  templateUrl: './consulta-caso.component.html',
  styleUrls: ['./consulta-caso.component.css']
})
export class ConsultaCasoComponent implements OnInit {

  casos:Caso[];
  constructor(private casoService: CasoService) { }

  ngOnInit(): void {
    //this.casoService.get().subscribe(result)
  }

}
