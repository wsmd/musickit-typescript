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
