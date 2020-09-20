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

import { IonicStorageModule } from '@ionic/storage';
import { ObjectInventoryModalPageModule } from './object-inventory-modal/object-inventory-modal.module';
<<<<<<< HEAD
import {HistoryModalPageModule} from './history-modal/history-modal.module';
=======
import { NativeAudio } from '@ionic-native/native-audio/ngx';

>>>>>>> f03ebbfbdf7a32c1f903fc2c47aaaf54d8a1a1e6

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ObjectInventoryModalPageModule, 
    IonicStorageModule.forRoot(), HistoryModalPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    SauvegardeService,
    CharacterService,
    SceneService,
    NativeAudio,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
