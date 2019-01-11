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

player.bitrate.toString();
player.canSupportDRM === true;
player.currentPlaybackDuration > 10;
player.currentPlaybackProgress < 1;
player.currentPlaybackTime > 10;
player.currentPlaybackTimeRemaining > 30;
player.formattedCurrentPlaybackDuration.hours < 1;
player.formattedCurrentPlaybackDuration.minutes > 3;
player.isPlaying === true;
player.nowPlayingItemIndex && player.nowPlayingItemIndex > 1;
player.playbackRate > 1;
player.playbackTargetAvailable === true;
const playerQueue: MusicKit.Queue = player.queue;
player.repeatMode > 1;
player.repeatMode = 2;
player.shuffleMode < 1;
player.shuffleMode = 1;
player.volume < 1;
player.volume = 0;

let item: MusicKit.MediaItem;
item = player.nowPlayingItem;

player.addEventListener('EVENT_NAME', () => {});
player.removeEventListener('EVENT_NAME', () => {});
player.changeToMediaAtIndex(1);
player.changeToMediaItem('descriptor').then(position => position > 1);
player.mute();
player.pause();
player.play();
player.stop();
player.prepareToPlay('descriptor');
player.seekToTime(1);
player.showPlaybackTargetPicker();
player.skipToNextItem().then(position => position > 1);
player.skipToPreviousItem().then(position => position > 1);

let state: number = MusicKit.PlaybackStates.none;
state = MusicKit.PlaybackStates.loading;
state = MusicKit.PlaybackStates.playing;
state = MusicKit.PlaybackStates.paused;
state = MusicKit.PlaybackStates.stopped;
state = MusicKit.PlaybackStates.ended;
state = MusicKit.PlaybackStates.seeking;
state = MusicKit.PlaybackStates.waiting;
state = MusicKit.PlaybackStates.stalled;
state = MusicKit.PlaybackStates.completed;
