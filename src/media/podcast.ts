export enum PodcastEntity {
    PodcastAuthor = 'podcastAuthor',
    Podcast = 'podcast',
}

export enum PodcastAttribute {
    TitleTerm = 'titleTerm', 
    LanguageTerm = 'languageTerm', 
    AuthorTerm = 'authorTerm', 
    GenreIndex = 'genreIndex', 
    ArtistTerm = 'artistTerm', 
    RatingIndex = 'ratingIndex', 
    KeywordsTerm = 'keywordsTerm', 
    DescriptionTerm = 'descriptionTerm'
}

export class Podcast {
    readonly type = 'podcast';

    constructor(readonly entity?: PodcastEntity, readonly attribute?: PodcastAttribute) {}
}
