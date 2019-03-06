import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaNoticiasComponent } from './home/noticias/lista-noticias/lista-noticias.component';
import { InformacionComponent } from './home/informacion/informacion.component';



const APP_ROUTES: Routes= [

    {path: 'home', component: HomeComponent},
    {path: 'lista-noticias', component: ListaNoticiasComponent},
    {path: 'informacion', component: InformacionComponent},
    
    // otherwise redirect to home
    {path: '', pathMatch: 'full', redirectTo: 'home'}, 
    {path: '**', pathMatch: 'full', redirectTo: 'home'}  

];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'});