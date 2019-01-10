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
   * A dictionary of configuration options for the MusicKit instance.
   */
  interface Configuration {
    /**
     * The developer token to identify yourself as a trusted developer and
     * member of the Apple Developer Program.
     */
    developerToken?: String;
  }

  /**
   * This object provides access to a player instance, and through the player
   * instance, access to control playback.
   */
  interface MusicKitInstance {}
}
