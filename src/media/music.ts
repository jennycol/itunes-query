export enum MusicEntity {
  MusicArtist = 'musicArtist',
  MusicTrack = 'musicTrack',
  Album = 'album',
  MusicVideo = 'musicVideo',
  Mix = 'mix',
  Song = 'song'
}

export enum MusicAttribute {
  MixTerm = 'mixTerm', 
  GenreIndex = 'genreIndex', 
  ArtistTerm = 'artistTerm', 
  ComposerTerm = 'composerTerm', 
  AlbumTerm = 'albumTerm', 
  RatingTerm = 'ratingIndex', 
  SongTerm = 'songTerm',
}

export class Music {
  readonly type = 'music';

  constructor(readonly entity?: MusicEntity, readonly attribute?: MusicAttribute) {}
}
