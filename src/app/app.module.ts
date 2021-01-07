import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    AuthButtonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'rigoriosh.us.auth0.com',
      clientId: 'Alx4tpAckQp12FAmjvi7Le6jtpTyGflt'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
