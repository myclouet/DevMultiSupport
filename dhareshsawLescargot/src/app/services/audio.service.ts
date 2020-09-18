import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio:Boolean;
  audioVoice: Boolean;

  constructor(private nativeAudio: NativeAudio, private platform: Platform) { }


    // -----------------------------------------------------------------------------------------------
    // AUDIO
    // -----------------------------------------------------------------------------------------------

    startAudioService() {
       this.platform.ready().then(() => {  
         this.nativeAudio.preloadComplex('uniqueKey1', 'assets/audio/audioDhareshsaw.mp3', 1, 1, 0).then(() => {     
           this.nativeAudio.loop('uniqueKey1');
           this.audio = true;
         });
       });
     }

    stopAudioService() {
       this.nativeAudio.stop('uniqueKey1');
       this.audio = false;
     }

    restartAudioService() {
       this.nativeAudio.loop('uniqueKey1');
       this.audio = true;
     }



    // TEST AUDIO TEXTES

    startAudioVoiceService(scene) { 
      this.nativeAudio.stop('uniqueKey2');
      this.nativeAudio.setVolumeForComplexAsset('uniqueKey1', 0.1);
      this.platform.ready().then(() => {  
        this.nativeAudio.preloadComplex('uniqueKey2', scene.audioText, 1, 1, 0).then(() => {
          if(this.audioVoice === true) {
            this.nativeAudio.play('uniqueKey2');
            this.audioVoice = true;
          }      
        });
      });
    }

   stopAudioVoiceService() {
      this.nativeAudio.stop('uniqueKey2');
      this.audioVoice = false;
    }

   restartAudioVoiceService() {
      this.nativeAudio.play('uniqueKey2');
      this.audioVoice = true;
    }

  }

