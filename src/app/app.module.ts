import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HistorietasComponent } from './historietas/historietas.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { EventsComponent } from './events/events.component';
import { FootComponent } from './foot/foot.component';
import { NavComponent } from './header/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistorietasComponent,
    ProfileComponent,
    FriendsComponent,
    EventsComponent,
    FootComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
