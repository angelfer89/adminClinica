import { Routes } from '@angular/router';
import { EventosComponent } from '../eventos/eventos.component';
import { CrearEventoComponent } from '../eventos/crear-evento/crear-evento.component';

export const dashboardRoutes: Routes = [
    { path: '', component: EventosComponent},
    { path: 'crearEvento', component: CrearEventoComponent}
]