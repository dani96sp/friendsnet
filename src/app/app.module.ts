import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MisHistorietasService } from './historietas/mishistorietas/mishistorietas.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HistorietasComponent } from './historietas/historietas.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { EventsComponent } from './events/events.component';
import { FootComponent } from './foot/foot.component';
import { NavComponent } from './header/nav/nav.component';
import { PublicarComponent } from './historietas/publicar/publicar.component';
import { MishistorietasComponent } from './historietas/mishistorietas/mishistorietas.component';
import { PersonService } from './historietas/person.service';
import { MispublicacionesComponent } from './profile/mispublicaciones/mispublicaciones.component';
import { MiscoleguillasComponent } from './profile/miscoleguillas/miscoleguillas.component';
import { MisdatosComponent } from './profile/misdatos/misdatos.component';
import { InfocoleguillaComponent } from './friends/infocoleguilla/infocoleguilla.component';

const appRoutes: Routes = [
  { path: 'historietas', component: HistorietasComponent },
  { path: 'profile',     component: ProfileComponent },
  { path: 'friends',     component: FriendsComponent },
  { path: 'events',     component: EventsComponent },
  { path: '',     component: HistorietasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistorietasComponent,
    ProfileComponent,
    FriendsComponent,
    EventsComponent,
    FootComponent,
    NavComponent,
    PublicarComponent,
    MishistorietasComponent,
    MispublicacionesComponent,
    MiscoleguillasComponent,
    MisdatosComponent,
    InfocoleguillaComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [MisHistorietasService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
