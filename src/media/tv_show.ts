export enum TvShowEntity {
    TvEpisode = 'tvEpisode',
    TvSeason = 'tvSeason',
}

export enum TvShowAttribute {
    GenreIndex = 'genreIndex', 
    TvEpisodeTerm = 'tvEpisodeTerm', 
    ShowTerm = 'showTerm', 
    TvSeasonTerm = 'tvSeasonTerm', 
    RatingIndex = 'ratingIndex', 
    DescriptionTerm = 'descriptionTerm',
}

export class TvShow {
    readonly type = 'tvShow';

    constructor(readonly entity?: TvShowEntity, readonly attribute ?: TvShowAttribute) {}
}
