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

music.addEventListener(MusicKit.Events.mediaItemDidChange, () => {});
music.addToLibrary(1, 'type').then(() => {});
music.authorize().then(token => token.charCodeAt(0));
music.changeToMediaAtIndex(1).then(position => position > 1);
music.play().then(position => position > 1);

music.removeEventListener(MusicKit.Events.mediaItemDidChange, () => {});
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

let nowPlayingItem: MusicKit.MediaItem;
nowPlayingItem = player.nowPlayingItem;

player.addEventListener(MusicKit.Events.playbackTimeDidChange, () => {});
player.removeEventListener(MusicKit.Events.playbackProgressDidChange, () => {});
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

// API

api.activities(['ID']).then();
api.activity('ID').then();

api.addToLibrary(['ID']);

api.album('ID').then();
api.albums(['ID']).then();

api.appleCurator('ID').then();
api.appleCurators(['ID']).then();

api.artist('ID').then();
api.artists(['ID']).then();

api.charts(['ID']).then();

api.curator('ID').then();
api.curators(['ID']).then();

api.genre('ID').then();
api.genres(['ID']).then();

api.historyHeavyRotation(['ID']).then();

api.musicVideo('ID').then();
api.musicVideos(['ID']).then();

api.playlist('ID').then();
api.playlists(['ID']).then();

api.recentPlayed(['ID']).then();

api.recommendation('ID').then();
api.recommendations(['ID']).then();

api.search('ID').then();
api.searchHints('ID').then();

api.song('ID').then();
api.songs(['ID']).then();

api.station('ID').then();
api.stations(['ID']).then();

api.storefront('ID').then();
api.storefronts(['ID']).then();

// Library

let library: MusicKit.Library = api.library;

library.album('ID').then();
library.albums(['ID']).then();
library.albums(null).then();

library.artist('ID').then();
library.artists(['ID']).then();
library.artists(null).then();

library.musicVideo('ID').then();
library.musicVideos(['ID']).then();
library.musicVideos(null).then();

library.playlist('ID').then();
library.playlists(['ID']).then();
library.playlists(null).then();

library.search('term').then();

library.song('ID').then();
library.songs(['ID']).then();
library.songs(null).then();

// MediaItem

const item: MusicKit.MediaItem = new MusicKit.MediaItem({
  attributes: {},
  type: 'playlist',
});

item.prepareToPlay().then();
item.albumInfo;
item.albumName;
item.artistName;
item.artwork;
item.artworkURL;
item.attributes;
item.contentRating;
item.discNumber;
item.id;
item.info;
item.isExplicitItem;
item.isPlayable;
item.isPreparedToPlay;
item.isrc;
item.playbackDuration;
item.playlistArtworkURL;
item.playlistName;
item.previewURL;
item.releaseDate;
item.title;
item.trackNumber;
item.type;

// Queue

const items = [new MusicKit.MediaItem()];
music.playLater({ items }).then();
music.playNext({ items });
music.setQueue({ items, startPosition: 0 }).then(queue => {
  if (queue.nextPlayableItem) {
    console.log(queue.nextPlayableItem.title);
  }
  if (queue.previousPlayableItem) {
    console.log(queue.previousPlayableItem);
  }
});

const queue: MusicKit.Queue = music.player.queue;
queue.isEmpty === false;
queue.items.map(item => item.title);
queue.length > 1;
queue.position > 0;
queue.addEventListener(MusicKit.Events.queueItemsDidChange, () => {});
queue.removeEventListener(MusicKit.Events.queuePositionDidChange, () => {});

queue.append(item);
queue.prepend(item);
queue.indexForItem(item) > 0;

const firstItem = queue.item(0);
if (firstItem) {
  console.log(firstItem.title);
}

// Errors

function errorMessage(error: MusicKit.MKError) {
  const messages = {
    [MusicKit.MKError.ACCESS_DENIED]: "you don't have permission",
    [MusicKit.MKError.AUTHORIZATION_ERROR]: 'authorization was rejected',
    [MusicKit.MKError.CONFIGURATION_ERROR]: 'configuration error',
    [MusicKit.MKError.CONTENT_RESTRICTED]: 'content is restricted',
    [MusicKit.MKError.INVALID_ARGUMENTS]: 'parameters provided are invalid',
    [MusicKit.MKError.MEDIA_CERTIFICATE]: 'VM certificate could not be applied',
    [MusicKit.MKError.MEDIA_DESCRIPTOR]: 'the media item descriptor is invalid',
    [MusicKit.MKError.MEDIA_KEY]: 'DRM key could not be generated',
    [MusicKit.MKError.MEDIA_LICENSE]: ' DRM license error',
    [MusicKit.MKError.MEDIA_PLAYBACK]: 'media playback error',
    [MusicKit.MKError.MEDIA_SESSION]: 'EME session could not be created',
    [MusicKit.MKError.NETWORK_ERROR]: 'network error',
    [MusicKit.MKError.NOT_FOUND]: 'resource was not found',
    [MusicKit.MKError.QUOTA_EXCEEDED]: ' exceeded the api quota',
    [MusicKit.MKError.SERVER_ERROR]: 'server error',
    [MusicKit.MKError.SERVICE_UNAVAILABLE]: 'service could not be reached',
    [MusicKit.MKError.SUBSCRIPTION_ERROR]: 'subscription has expired',
    [MusicKit.MKError.UNKNOWN_ERROR]: 'unknown error',
    [MusicKit.MKError.UNSUPPORTED_ERROR]: 'operation is not supported',
  };
  return messages[error.errorCode] || 'something went wrong!';
}

async function getArtists() {
  try {
    await MusicKit.getInstance().api.library.artist('');
  } catch (err) {
    console.log(errorMessage(err));
  }
}

MusicKit.errors.map(error => error.errorCode);

// Utilities

MusicKit.formatArtworkURL(player.nowPlayingItem.artwork, 300, 300);
MusicKit.formatArtworkURL(item.attributes.artwork, 300, 300);
MusicKit.formatArtworkURL({ url: 'path/to/artwork' } as MusicKit.Artwork, 300, 300);

const { hours, minutes } = MusicKit.formattedMilliseconds(3000);

MusicKit.generateEmbedCode('path/to/content', { width: '400px', height: '400px' });

const version: string = MusicKit.version;
