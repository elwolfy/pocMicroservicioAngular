import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './componentes/persona/persona.component';
import { PersonaRegistroComponent } from './componentes/persona-registro/persona-registro.component';

const routes: Routes = [
  { path: '', component: PersonaComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'persona-registro', component: PersonaRegistroComponent },
  { path: 'persona-edit/:personaId', component: PersonaRegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
