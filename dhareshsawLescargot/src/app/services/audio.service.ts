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
      this.nativeAudio.stop('uniqueKey3');//2 erreurs au demarrage dans la console google car ne trouve pas l'objet
      this.nativeAudio.unload('uniqueKey3');
      this.nativeAudio.preloadComplex('uniqueKey1', 'assets/audio/audioDhareshsaw.mp3', 1, 1, 0).then(() => {
        this.nativeAudio.loop('uniqueKey1');
        this.audio = true;
      });
    });
  }

  startAudioServiceCombat(scene) {
    if(scene.isBattle === true){
    this.platform.ready().then(() => {
      this.nativeAudio.stop('uniqueKey1');
      this.nativeAudio.unload('uniqueKey1');
      this.nativeAudio.preloadComplex('uniqueKey3', 'assets/audio/audioDhareshsawCombat.mp3', 1, 1, 0).then(() => {
        this.nativeAudio.play('uniqueKey3');
        this.audio = true;
      });
    });
  }
  }

  startAudioServiceLoose() {
    this.platform.ready().then(() => {
      this.nativeAudio.stop('uniqueKey3');
      this.nativeAudio.unload('uniqueKey3');
      this.nativeAudio.preloadComplex('uniqueKey4', 'assets/audio/audioDhareshsawLoose.mp3', 1, 1, 0).then(() => {
        this.nativeAudio.play('uniqueKey4');
        this.audio = true;
      });
    });
  }

  stopAudioService(scene) {
    if(scene.isBattle === true){
      this.nativeAudio.stop('uniqueKey3');
    } else {
      this.nativeAudio.stop('uniqueKey1');
    }
    this.audio = false;
  }

  restartAudioService(scene) {
    if(scene.isBattle === true){
      this.nativeAudio.loop('uniqueKey3');
    } else {
      this.nativeAudio.loop('uniqueKey1');
    }
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
    this.nativeAudio.unload('uniqueKey2');
    this.nativeAudio.setVolumeForComplexAsset('uniqueKey1', 1);
  }

  unloadVoice() {
    this.nativeAudio.stop('uniqueKey2');
    this.nativeAudio.unload('uniqueKey2');
  }

}

