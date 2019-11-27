import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaFiltro } from 'src/app/models/persona-filtro';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {


  public filtro: PersonaFiltro = new PersonaFiltro();
  public personas = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personaService: PersonaService
  ) { }


  ngOnInit() {
    console.log(':::::::::::::::::INIT  PERSONA::::::::::::::::');
    this.findPersona();
  }



  findPersona() {
    this.filtro.start = 0;
    this.personaService.find(this.filtro).subscribe(
      res => {
        this.personas = res.body['elements'];
      }, error => {
      }
    );
  }

  limpiarFiltro() {
    this.filtro.start = 0;
    this.filtro = new PersonaFiltro();
    this.findPersona();
  }

  seleccionar(personaId) {
     
  }
 

  delete(personaId) {
     this.personaService.delete(personaId).subscribe(
      success => {
         this.findPersona();
      }
  );
  }

}
