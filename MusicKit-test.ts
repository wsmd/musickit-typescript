let music: MusicKit.MusicKitInstance;

const appConfig: MusicKit.AppConfiguration = {
  build: '1234',
  icon: 'icon.png',
  name: 'app-name',
  version: '1.0.0',
};

music = MusicKit.configure({
  app: appConfig,
  developerToken: 'abc123',
  storefrontId: '123',
  declarativeMarkup: true,
  bitrate: MusicKit.PlaybackBitrate.HIGH,
});

let instance: MusicKit.MusicKitInstance;
instance = MusicKit.getInstance();

music.bitrate.toString();
music.developerToken.charCodeAt(0);
music.storefrontId.charCodeAt(0);
music.isAuthorized === true;
music.musicUserToken.charCodeAt(0);
music.playbackTargetAvailable === false;

const api: MusicKit.API = music.api;
const playbackState: MusicKit.PlaybackStates = music.playbackState;
const player: MusicKit.Player = music.player;

music.addEventListener('test', () => {});
music.addToLibrary(1, 'type').then(() => {});
music.authorize().then(token => token.charCodeAt(0));
music.changeToMediaAtIndex(1).then(position => position > 1);
music.play().then(position => position > 1);
/**
 * @todo SetQueueOptions
 */
music.playLater({}).then();
music.playNext({});
const queue: MusicKit.Queue = music.setQueue({});

music.removeEventListener('test', () => {});
music.seekToTime(12345).then(() => {});
music.skipToNextItem().then(position => position > 1);
music.skipToPreviousItem().then(position => position > 1);
music.stop();
music.unauthorize().then(() => {});
