import Sound from 'react-native-sound';

export const playStartSound = () => {
  const startSound = new Sound(require('../assets/start_sound.mp3'), Sound.MAIN_BUNDLE, (error) => {
    if (!error) startSound.play();
  });
};

export const playStopSound = () => {
  const stopSound = new Sound(require('../assets/stop_sound.mp3'), Sound.MAIN_BUNDLE, (error) => {
    if (!error) stopSound.play();
  });
};
