export enum AllEntity {
    Movie = 'movie',
    Podcast = 'podcast',
    AllArtist = 'allArtist',
    Music = 'music',
    MusicVideo = 'musicVideo',
    AudioBook = 'audiobook',
    ShortFilm = 'shortFilm',
    TvShow = 'tvShow',
    Software = 'software',
    EBook = 'ebook',
    All = 'all',
}

export enum AllAttributes {
    ActorTerm = 'actorTerm', 
    LanguageTerm = 'languageTerm', 
    AllArtistTerm = 'allArtistTerm', 
    TvEpisodeTerm = 'tvEpisodeTerm', 
    ShortFilmTerm = 'shortFilmTerm', 
    DirectorTerm = 'directorTerm', 
    ReleaseYearTerm = 'releaseYearTerm', 
    TitleTerm = 'titleTerm', 
    FeatureFilmTerm = 'featureFilmTerm', 
    RatingIndex = 'ratingIndex', 
    KeywordsTerm = 'keywordsTerm', 
    DescriptionTerm = 'descriptionTerm', 
    AuthorTerm = 'authorTerm', 
    GenreIndex = 'genreIndex', 
    MixTerm = 'mixTerm', 
    AllTrackTerm = 'allTrackTerm', 
    ArtistTerm = 'artistTerm', 
    ComposerTerm = 'composerTerm', 
    TvSeasonTerm = 'tvSeasonTerm', 
    ProducerTerm = 'producerTerm', 
    RatingTerm = 'ratingTerm', 
    SongTerm = 'songTerm', 
    MovieArtistTerm = 'movieArtistTerm', 
    ShowTerm = 'showTerm', 
    MovieTerm = 'movieTerm', 
    AlbumTerm = 'albumTerm',
}

export class All {
    readonly type = 'all';

    constructor(readonly entity?: AllEntity, readonly attribute?: AllAttributes) {}
}
