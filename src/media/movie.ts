export enum MovieEntity {
    MovieArtist = 'movieArtist',
    Movie = 'movie',
}

export enum MovieAttribute {
    ActorTerm = 'actorTerm', 
    GenreIndex = 'genreIndex', 
    ArtistTerm = 'artistTerm', 
    ShortFilmTerm = 'shortFilmTerm', 
    ProducerTerm = 'producerTerm', 
    RatingTerm = 'ratingTerm', 
    DirectorTerm = 'directorTerm', 
    ReleaseYearTerm = 'releaseYearTerm', 
    FeatureFilmTerm = 'featureFilmTerm', 
    MovieArtistTerm = 'movieArtistTerm', 
    MovieTerm = 'movieTerm', 
    RatingIndex = 'ratingIndex', 
    DescriptionTerm = 'descriptionTerm',
}

export class Movie {
    readonly type = 'movie';

    constructor(readonly entity?: MovieEntity, readonly attribute?: MovieAttribute) {}
}