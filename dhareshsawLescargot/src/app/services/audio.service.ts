import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio:Boolean = false;

  constructor(private nativeAudio: NativeAudio, private platform: Platform) { }


       // -----------------------------------------------------------------------------------------------
     // AUDIO
      // -----------------------------------------------------------------------------------------------

    startAudioService() {
       this.platform.ready().then(() => {  
         this.nativeAudio.preloadComplex('uniqueKey1', 'assets/audio/audioDhareshsaw.mp3', 1, 1, 0).then(() => {     
           this.nativeAudio.loop('uniqueKey1');
         });
       });
     }

    stopAudioService() {
       this.nativeAudio.stop('uniqueKey1');
       this.audio = false;
     }

    restartAudioService() {
       this.nativeAudio.loop('uniqueKey1');
       this.audio = false;
     }
  }
