export enum MusicVideoEntity {
    MusicArtist = 'musicArtist',
    MusicVideo = 'musicVideo',
}

export enum MusicVideoAttribute {
    GenreIndex = 'genreIndex', 
    ArtistTerm = 'artistTerm', 
    AlbumTerm = 'albumTerm', 
    RatingIndex = 'ratingIndex', 
    SongTerm = 'songTerm',
}

export class MusicVideo {
    readonly type = 'musicVideo';

    constructor(readonly entity?: MusicVideoEntity, readonly attribute?: MusicVideoAttribute) {}
}