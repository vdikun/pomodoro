// Import the react-native-sound module
var Sound = require('react-native-sound');
 
// Enable playback in silence mode
Sound.setCategory('Playback');

export const playSound = (fileName) => {
  let sound = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound from ' + fileName, error);
      return;
    }
    sound.play((success) => {
      if (success) {
        console.log('successfully finished playing ' + fileName);
      } else {
        console.log('playback of ' + fileName + ' failed due to audio decoding errors');
        // reset the player to its uninitialized state (android only)
        // this is the only option to recover after an error occured and use the player again
        sound.reset();
      }
    });
  });
  //return sound;
}

export const SoundClips = { ting: 'Ting.mp3', blop: 'Blip.mp3'};