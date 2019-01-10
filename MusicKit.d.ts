// Type definitions for MusicKit JS
// Project: https://developer.apple.com/documentation/musickitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd/musickit-typescript>

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
  interface MusicKitInstance {
    /**
     * An instance of the MusicKit API.
     */
    readonly api: API;
    /**
     * An instance of the MusicKit API.
     */
    readonly bitrate: MusicKit.PlaybackBitrate;
    /**
     * The developer token to identify yourself as a trusted developer and
     * member of the Apple Developer Program.
     */
    readonly developerToken: string;
    /**
     * A Boolean value indicating whether the user has authenticated and
     * authorized the application for use.
     */
    readonly isAuthorized: boolean;
    /**
     * A user token used to access personalized Apple Music content.
     */
    readonly musicUserToken: string;
    /**
     * The current playback state of the music player.
     */
    readonly playbackState: PlaybackStates;
    /**
     * A Boolean value that indicates if a playback target is available.
     */
    readonly playbackTargetAvailable: boolean;
    /**
     * An instance of the MusicKit player.
     */
    readonly player: Player;
    /**
     * The current storefront for the configured MusicKit instance.
     */
    readonly storefrontId: string;
    /**
     * Add an event listener for a MusicKit instance by name.
     *
     * @param name The name of the event.
     * @param callback The callback function to invoke when the event occurs.
     */
    addEventListener(name: string, callback: () => any): void;
    /**
     * No description available.
     */
    addToLibrary(id: any, type: AddToLibraryContentType): Promise<any>;
    /**
     * Returns a promise containing a music user token when a user has
     * authenticated and authorized the app.
     */
    authorize(): Promise<string>;
    /**
     * Begins playing the media item at the specified index in the queue.
     *
     * @param index The queue index to begin playing media.
     */
    changeToMediaAtIndex(index: number): Promise<number>;
    /**
     * Pauses playback of the media player.
     */
    pause(): void;
    /**
     * Begins playback of the current media item.
     */
    play(): Promise<MediaItemPosition>;
    /**
     * No description available.
     */
    playLater(options: SetQueueOptions): Promise<any>;
    /**
     * No description available.
     */
    playNext(options: SetQueueOptions): void;
    /**
     * Removes an event listener for a MusicKit instance by name.
     *
     * @param name The name of the event.
     * @param callback The callback function to remove.
     */
    removeEventListener(name: string, callback: () => any): void;
    /**
     * Sets the playback point to a specified time.
     *
     * @param time The time to set as the playback point.
     */
    seekToTime(time: number): Promise<any>;
    /**
     * Sets a music player's playback queue using queue options.
     *
     * @param options The option used to set the playback queue.
     */
    setQueue(options: SetQueueOptions): Promise<Queue>;
    /**
     * Starts playback of the next media item in the playback queue.
     */
    skipToNextItem(): Promise<MediaItemPosition>;
    /**
     * Starts playback of the previous media item in the playback queue.
     */
    skipToPreviousItem(): Promise<MediaItemPosition>;
    /**
     * Stops playback of the media player.
     */
    stop(): void;
    /**
     * Unauthorizes the app for the current user.
     */
    unauthorize(): Promise<any>;
  }

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
   * @todo
   */
  interface Player {}

  /**
   * @todo
   */
  interface SetQueueOptions {}

  /**
   * @todo
   */
  interface Queue {}

  /**
   * @todo
   */
  interface PlaybackStates {}

  /**
   * @todo
   */
  interface API {}

  /**
   * The playback bit rate of the music player.
   */
  enum PlaybackBitrate {
    HIGH = 256,
    STANDARD = 64,
  }

  type AddToLibraryContentType = any;
  type MediaItemPosition = number;
}
