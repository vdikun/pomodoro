// Import the react-native-sound module
var Sound = require('react-native-sound');
 
// Enable playback in silence mode
Sound.setCategory('Playback');

const makeSound = (fileName) => {
  return new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound from ' + fileName, error);
      return;
    }
  });
}

const ting = makeSound('Ting.mp3');
const blop = makeSound('Blip.mp3');

export default Sounds = { ting, blop };