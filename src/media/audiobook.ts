export enum AudioBookEntity {
    AudioBookAuthor = 'audiobookAuthor',
    AudioBook = 'audiobook',
}

export enum AudioBookAttributes {
    TitleTerm = 'titleTerm', 
    AuthorTerm = 'authorTerm', 
    GenreIndex = 'genreIndex', 
    RatingIndex = 'ratingIndex',
}

export class AudioBook {
    readonly type = 'audiobook';

    constructor(readonly entity?: AudioBookEntity, readonly attribute?: AudioBookAttributes) {}
}
