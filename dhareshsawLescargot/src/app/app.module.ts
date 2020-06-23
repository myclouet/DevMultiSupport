import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SauvegardeService } from './services/sauvegarde.service';
import { CharacterService } from './services/character.service';
import { SceneService } from './services/scene.service';
import { ObjectInventoryService } from './services/object-inventory.service';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared.module';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModule],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
>>>>>>> 64fa663f18a32db0da9d4b7a542d7f0de078b32d
  providers: [
    StatusBar,
    SplashScreen,
    SauvegardeService,
    CharacterService,
    ObjectInventoryService,
    SceneService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
