export enum ShortFilmEntity {
    ShortFilmArtist = 'shortFilmArtist',
    ShortFilm = 'shortFilm',
}

export enum ShortFilmAttribute {
    GenreIndex = 'genreIndex', 
    ArtistTerm = 'artistTerm', 
    ShortFilmTerm = 'shortFilmTerm', 
    RatingIndex = 'ratingIndex', 
    DescriptionTerm = 'descriptionTerm',
}

export class ShortFilm {
    readonly type = 'shortFilm';

    constructor(readonly entity?: ShortFilmEntity, readonly attribute?: ShortFilmAttribute) {}
}

