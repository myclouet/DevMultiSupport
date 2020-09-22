import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio: Boolean;

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
    this.platform.ready().then(() => {
      this.nativeAudio.setVolumeForComplexAsset('uniqueKey1', 0.4);
      this.nativeAudio.preloadComplex('uniqueKey2', scene.audioText, 1, 1, 0).then(() => {
          this.nativeAudio.play('uniqueKey2');
      });
    });
  }

  stopAudioVoiceService() {
    this.nativeAudio.stop('uniqueKey2');
    this.nativeAudio.setVolumeForComplexAsset('uniqueKey1', 1);
  }

  unloadVoice() {
    this.nativeAudio.stop('uniqueKey2');
    this.nativeAudio.unload('uniqueKey2');
  }

}

