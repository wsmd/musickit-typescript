// Type definitions for MusicKit JS 1.0
// Project: https://developer.apple.com/documentation/musickitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

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
    addToLibrary(id: any, type: any): Promise<any>;
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
    playLater(options: SetQueueOptions): Promise<void>;
    /**
     * No description available.
     */
    playNext(options: SetQueueOptions): Promise<void>;
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
   * A media player that represents the media player for a MusicKit instance.
   */
  interface Player {
    /**
     * The current bit rate of the music player.
     */
    readonly bitrate: number;
    /**
     * The music player has EME loaded.
     */
    readonly canSupportDRM: boolean;
    /**
     * The current playback duration.
     */
    readonly currentPlaybackDuration: number;
    /**
     * The current playback progress.
     */
    readonly currentPlaybackProgress: number;
    /**
     * The current position of the playhead.
     */
    readonly currentPlaybackTime: number;
    /**
     * No description available.
     */
    readonly currentPlaybackTimeRemaining: number;
    /**
     * The current playback duration in hours and minutes.
     */
    readonly formattedCurrentPlaybackDuration: FormattedPlaybackDuration;
    /**
     * A Boolean value indicating whether the player is currently playing.
     */
    readonly isPlaying: boolean;
    /**
     * The currently-playing media item, or the media item, within an queue,
     * that you have designated to begin playback.
     */
    readonly nowPlayingItem: MediaItem;
    /**
     * The index of the now playing item in the current playback queue.
     */
    readonly nowPlayingItemIndex?: number;
    /**
     * The current playback rate for the player.
     */
    readonly playbackRate: number;
    /**
     * The current playback state of the music player.
     */
    readonly playbackState: PlaybackStates;
    /**
     * A Boolean value that indicates whether a playback target is available.
     */
    readonly playbackTargetAvailable?: boolean;
    /**
     * The current playback queue of the music player.
     */
    readonly queue: Queue;
    /**
     * The current repeat mode of the music player.
     */
    repeatMode: PlayerRepeatMode;
    /**
     * The current shuffle mode of the music player.
     */
    shuffleMode: PlayerShuffleMode;
    /**
     * A number indicating the current volume of the music player.
     */
    volume: number;
    /**
     * Adds an event listener as a callback for an event name.
     *
     * @param name The name of the event.
     * @param callback The callback function to invoke when the event occurs.
     */
    addEventListener(name: string, callback: () => any): void;
    /**
     * Begins playing the media item at the specified index in the queue immediately.
     *
     * @param The queue index to begin playing media.
     */
    changeToMediaAtIndex(index: number): Promise<MediaItemPosition>;
    /**
     * Begins playing the media item in the queue immediately.
     *
     * @param descriptor descriptor can be a MusicKit.MediaItem instance or a
     * string identifier.
     */
    changeToMediaItem(descriptor: descriptor): Promise<MediaItemPosition>;
    /**
     * Sets the volume to 0.
     */
    mute(): void;
    /**
     * Pauses playback of the current item.
     */
    pause(): void;
    /**
     * Initiates playback of the current item.
     */
    play(): Promise<MediaItemPosition>;
    /**
     * Prepares a music player for playback.
     *
     * @param descriptor descriptor can be a MusicKit.MediaItem instance or a
     * string identifier.
     */
    prepareToPlay(descriptor: descriptor): Promise<void>;
    /**
     * No description available.
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
    seekToTime(time: number): Promise<void>;
    /**
     * Displays the playback target picker if a playback target is available.
     */
    showPlaybackTargetPicker(): void;
    /**
     * Starts playback of the next media item in the playback queue.
     */
    skipToNextItem(): Promise<MediaItemPosition>;
    /**
     * Starts playback of the previous media item in the playback queue.
     */
    skipToPreviousItem(): Promise<MediaItemPosition>;
    /**
     * Stops the currently playing media item.
     */
    stop(): void;
  }

  /**
   * This class represents the Apple Music API.
   */
  interface API {
    /**
     * An instance of the Cloud library.
     */
    library: Library;
    /**
     * The storefront used for making calls to the API.
     */
    storefrontId: string;
    /**
     * Fetch one or more activities using their identifiers.
     *
     * @param ids An array of activity identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    activities(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch an activity using its identifier.
     *
     * @param id An activity identifier.
     * @param parameters A query params object that is serialized and passed
     * directly to the Apple Music API.
     */
    activity(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Add a catalog resource to a user's library.
     */
    addToLibrary(parameters?: AddToLibraryParameters): Promise<void>;
    /**
     * Fetch an album using its identifier.
     *
     * @param id An album identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    album(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more albums using their identifiers.
     *
     * @param ids An array of album identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    albums(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch an Apple curator using its identifier.
     *
     * @param id An Apple curator identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    appleCurator(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more Apple curators using their identifiers.
     *
     * @param ids An array of Apple curator identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    appleCurators(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch an artist using its identifier.
     *
     * @param id An artist identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    artist(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more artists using their identifiers.
     *
     * @param ids An array of artist identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    artists(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch one or more charts.
     *
     * @param types An array of chart types.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    charts(types: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a curator using its identifier.
     *
     * @param id A curator identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    curator(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more curators using their identifiers.
     *
     * @param ids An array of curator identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    curators(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a genre using its identifier.
     *
     * @param id An array of
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    genre(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more genres using their identifiers.
     *
     * @param ids An array of genre identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    genres(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch the resources in heavy rotation for the user.
     *
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    historyHeavyRotation(parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a music video using its identifier.
     *
     * @param id An array of video identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    musicVideo(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more music videos using their identifiers.
     *
     * @param ids An array of music video identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    musicVideos(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a playlist using its identifier.
     *
     * @param id A playlist identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    playlist(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more playlists using their identifiers.
     *
     * @param ids An array of playlist identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    playlists(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch the recently played resources for the user.
     *
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    recentPlayed(parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a recommendation using its identifier.
     *
     * @param id A recommendation identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    recommendation(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more recommendations using their identifiers.
     *
     * @param ids An array of recommendation identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    recommendations(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Search the catalog using a query.
     *
     * @param term The term to search.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    search(term: string, parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch the search term results for a hint.
     *
     * @param term The term to search.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    searchHints(term: string, parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a song using its identifier.
     *
     * @param ids An array of identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    song(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more songs using their identifiers.
     *
     * @param ids An array of song identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    songs(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a station using its identifier.
     *
     * @param id A station identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    station(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more stations using their identifiers.
     *
     * @param ids An array of station identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    stations(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a storefront using its identifier.
     *
     * @param id A storefront identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    storefront(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more storefronts using their identifiers.
     *
     * @param ids An array of storefront identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    storefronts(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
  }

  /**
   * This class represents a user's Cloud Library.
   */
  interface Library {
    /**
     * Fetch a library album using its identifier.
     *
     * @param id A library album identifier
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    album(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more library albums using their identifiers.
     *
     * @param ids An array of library album identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    albums(ids: string[] | null, parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a library artist using its identifier.
     *
     * @param id A library artist identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    artist(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more library artists using their identifiers.
     *
     * @param ids An array of library artist identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    artists(ids: string[] | null, parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a library music video using its identifier.
     *
     * @param id A library music video identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    musicVideo(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more library music videos using their identifiers.
     *
     * @param ids An array of library music video identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    musicVideos(ids: string[] | null, parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a library playlist using its identifier.
     *
     * @param id A library playlist identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    playlist(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more library playlists using their identifiers.
     *
     * @param ids An array of library playlist identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    playlists(ids: string[] | null, parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Search the library using a query.
     *
     * @param term The term to search.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    search(term: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch a library song using its identifier.
     *
     * @param id A library song identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    song(id: string, parameters?: QueryParameters): Promise<Resource>;
    /**
     * Fetch one or more library songs using their identifiers.
     *
     * @param ids An array of library song identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     */
    songs(ids: string[] | null, parameters?: QueryParameters): Promise<Resource[]>;
  }

  /**
   * The options to use when defining a media item.
   */
  interface MediaItemOptions {
    /**
     * The attributes for the media item.
     */
    attributes?: any;
    /**
     * The identifier for the media item.
     */
    id?: string;
    /**
     * The type for the media item.
     */
    type?: any;
  }

  /**
   * This class represents a single media item.
   */
  class MediaItem {
    /**
     * A constructor that creates a new media item from specified options.
     */
    constructor(options?: MediaItemOptions);
    /**
     * Prepares a media item for playback.
     */
    prepareToPlay(): Promise<void>;
    /**
     * A string of information about the album.
     */
    readonly albumInfo: string;
    /**
     * The title of the album.
     */
    readonly albumName: string;
    /**
     * The artist for a media item.
     */
    readonly artistName: string;
    /**
     * The artwork object for the media item.
     */
    readonly artwork: any;
    /**
     * The artwork image for the media item.
     */
    readonly artworkURL: string;
    /**
     * The attributes object for the media item.
     */
    readonly attributes: any;
    /**
     * A string containing the content rating for the media item.
     */
    readonly contentRating: string;
    /**
     * The disc number where the media item appears.
     */
    readonly discNumber: number;
    /**
     * The identifier for the media item.
     */
    readonly id: string;
    /**
     * A string of common information about the media item.
     */
    readonly info: string;
    /**
     * A Boolean value that indicates whether the item has explicit lyrics or language.
     */
    readonly isExplicitItem: boolean;
    /**
     * A Boolean value that indicated whether the item is playable.
     */
    readonly isPlayable: boolean;
    /**
     * A Boolean value indicating whether the media item is prepared to play.
     */
    readonly isPreparedToPlay: boolean;
    /**
     * The ISRC (International Standard Recording Code) for a media item.
     */
    readonly isrc: string;
    /**
     * The playback duration of the media item.
     */
    readonly playbackDuration: number;
    readonly playlistArtworkURL: string;
    readonly playlistName: string;
    /**
     * The URL to an unencrypted preview of the media item.
     */
    readonly previewURL: string;
    /**
     * The release date of the media item.
     */
    readonly releaseDate?: Date;
    /**
     * The name of the media item.
     */
    readonly title: string;
    /**
     * The number of the media item in the album's track list.
     */
    readonly trackNumber: number;
    /**
     * The type of the media item.
     */
    type: any;
  }

  /**
   * An array of media items to be played.
   */
  interface Queue {
    /**
     * A Boolean value indicating whether the queue has no items.
     */
    readonly isEmpty: boolean;
    /**
     * An array of all the media items in the queue.
     */
    readonly items: MediaItem[];
    /**
     * The number of items in the queue.
     */
    readonly length: number;
    /**
     * The next playable media item in the queue.
     */
    readonly nextPlayableItem?: MediaItem;
    /**
     * The current queue position.
     */
    readonly position: number;
    /**
     * The previous playable media item in the queue.
     */
    readonly previousPlayableItem?: MediaItem;

    /**
     * Add an event listener for a MusicKit queue by name.
     *
     * @param name The name of the event.
     * @param callback The callback function to remove.
     */
    addEventListener(name: string, callback: () => any): void;
    /**
     * Inserts the media items defined by the queue descriptor after the last
     * media item in the current queue.
     */
    append(descriptor: descriptor): void;
    /**
     * Returns the index in the playback queue for a media item descriptor.
     *
     * @param descriptor A descriptor can be an instance of the MusicKit.MediaItem
     * class, or a string identifier.
     */
    indexForItem(descriptor: descriptor): number;
    /**
     * Returns the media item located in the indicated array index.
     */
    item(index: number): MediaItem | null | undefined;
    /**
     * Inserts the media items defined by the queue descriptor into the current
     * queue immediately after the currently playing media item.
     */
    prepend(descriptor: any): void;
    /**
     * Removes an event listener for a MusicKit queue by name.
     *
     * @param name The name of the event.
     * @callback callback The callback function to remove.
     */
    removeEventListener(name: string, callback: () => any): void;
  }

  /**
   * The options to use when setting a music player's playback queue.
   */
  interface SetQueueOptions {
    /**
     * The catalog album used to set a music player's playback queue.
     */
    album?: string;
    /**
     * The media items used to set a music player's playback queue.
     */
    items: descriptor[];
    /**
     * The parameters used to set a music player's playback queue.
     */
    parameters?: QueryParameters;
    /**
     * The playlist used to set a music player's playback queue.
     */
    playlist?: string;
    /**
     * The song used to set a music player's playback queue.
     */
    song?: string;
    /**
     * The songs used to set a music player's playback queue.
     */
    songs?: string[];
    /**
     * The start position for a set playback queue.
     */
    startPosition?: number;
    /**
     * A content URL used to set a music player's playback queue.
     */
    url?: string;
  }

  /**
   * The playback bit rate of the music player.
   */
  enum PlaybackBitrate {
    HIGH = 256,
    STANDARD = 64,
  }

  /**
   * The playback states of the music player.
   */
  enum PlaybackStates {
    none,
    loading,
    playing,
    paused,
    stopped,
    ended,
    seeking,
    waiting,
    stalled,
    completed,
  }

  // types

  // enum is not exposed via the MusicKit namespace
  type PlayerRepeatMode = 0 | 1 | 2;

  // enum is not exposed via the MusicKit namespace
  type PlayerShuffleMode = 0 | 1;

  type MediaItemPosition = number;

  type FormattedPlaybackDuration = {
    hours: number;
    minutes: number;
  };

  type descriptor = MediaItem | string;

  type QueryParameters = {
    [key: string]: any;
  };

  /**
   * @todo https://developer.apple.com/documentation/applemusicapi/resource
   */
  type Resource = {
    [key: string]: any;
  };

  type AddToLibraryParameters = any;
}
