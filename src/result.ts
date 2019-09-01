export enum WrapperType {
    Track,
    Collection,
}

export enum Explicitness {
    Explicit,
    NotExplicit,
    Cleaned,
}

export enum MediaKind {
    Book,
    Album,
    CoachedAudio,
    FeatureMovie,
    InteractiveBooklet,
    MusicVideo,
    PDFPodcast,
    PodcastEpisode,
    SoftwarePackage,
    Song,
    TVEpisode,
}

export interface ItunesResult {
    wrapperType: WrapperType,
    explicitness: Explicitness,
    kind: MediaKind,
    trackName: string,
    artistName: string,
    collectionName: string,
    collectionViewURL: string,
    previewURL: string,
    trackViewURL: string,
    censoredName: string,
    artURL30: string,
    artURL60: string,
    artURL100: string,
    trackPrice: number,
    trackRentalPrice: number,
    trackHDPrice: number, 
    trackHDRentalPrice: number, 
    releaseDate: Date,
    trackExplicitness: Explicitness,
    trackCount: number,
    country: string,
    currency: string,
    primaryGenreName: string,
    genres: string[],
}