import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio:Boolean=false;

  constructor(private nativeAudio: NativeAudio) { }


       // -----------------------------------------------------------------------------------------------
     // AUDIO
      // -----------------------------------------------------------------------------------------------

      startAudioService() {
        this.nativeAudio.preloadSimple('uniqueId1', 'assets/audioDhareshsaw.mp3');
        this.nativeAudio.loop('uniqueId1');
        this.audio = true;
      }

      stopAudioService() {
        this.nativeAudio.stop('uniqueId1');
        this.audio = false;
      }
}
