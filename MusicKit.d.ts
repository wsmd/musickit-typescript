// Type definitions for MusicKit JS
// Project: https://developer.apple.com/documentation/musickitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd/musickit-typescript>

export = MusicKit;
export as namespace MusicKit;

/**
 * Use the MusicKit namespace to configure MusicKit JS and to access app
 * instances, control music playback, and fetch data from the Apple Music API.
 */
declare namespace MusicKit {
  /**
   * Configure a MusicKit instance.
   */
  function configure(configuration: Configuration): MusicKitInstance;
  /**
   * Returns the configured MusicKit instance.
   */
  function getInstance(): MusicKitInstance;

  /**
   * A dictionary of configuration options for the MusicKit instance.
   */
  interface Configuration {
    /**
     * The version of your app.
     */
    app?: AppConfiguration;
    /**
     * This property indicates whether you have explicitly enabled or disabled
     * declarative markup.
     */
    declarativeMarkup?: boolean;
    /**
     * The developer token to identify yourself as a trusted developer and
     * member of the Apple Developer Program.
     */
    developerToken?: string;
    /**
     * The current storefront for this MusicKit configuration.
     */
    storefrontId?: string;
    /**
     * The playback bit rate of the music player.
     */
    bitrate?: PlaybackBitrate;
  }

  /**
   * This object provides access to a player instance, and through the player
   * instance, access to control playback.
   */
  interface MusicKitInstance {}

  /**
   * A configuration for an app.
   */
  interface AppConfiguration {
    /**
     * The build number of your app.
     */
    build?: string;
    /**
     * A URL for your app icon.
     */
    icon?: string;
    /**
     * The name of your app.
     */
    name?: string;
    /**
     * The version of your app.
     */
    version?: string;
  }

  /**
   * The playback bit rate of the music player.
   */
  enum PlaybackBitrate {
    HIGH = 256,
    STANDARD = 64,
  }
}
