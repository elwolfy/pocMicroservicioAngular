import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styles: [],
  providers: [PersonaService]
})
export class PersonaRegistroComponent implements OnInit {
  public persona: Persona = new Persona();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personaService: PersonaService
  ) {
    this.route.params.subscribe(res => {
      if (res.personaId !== undefined) {
        this.get(res.personaId);
      }
    });
  }

  ngOnInit() {
  }

  saveOrUpdate() {
    this.personaService.saveOrUpdate(this.persona).subscribe(
      success => {
        this.router.navigate(['/persona']);
      }
    );
  }


  get(personaId: string) {
    this.personaService.get(personaId).subscribe(
      success => {
        this.persona = success.body;
      }
    );
  }
}
