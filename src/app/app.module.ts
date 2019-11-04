import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
