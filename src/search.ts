import fetch from 'node-fetch'

import {
    Movie,
    Podcast,
    Music,
    MusicVideo,
    AudioBook,
    ShortFilm,
    TvShow,
    Software,
    EBook,
    All
} from './media'

import { ItunesResult } from './result'

const BASE_URL = 'https://itunes.apple.com/search?'

export type ItunesMedia =
    | Movie
    | Podcast
    | Music
    | MusicVideo
    | AudioBook
    | ShortFilm
    | TvShow
    | Software
    | EBook
    | All

interface ItunesSearch {
    term: string
    media: ItunesMedia
    limit?: number
    lang?: string
    version?: 1 | 2
    explicit?: boolean
}

function buildURL({ term, media, limit, lang, version = 2, explicit }: ItunesSearch): string {
    let params = `term=${encodeURIComponent(term)}&media=${encodeURIComponent(media.type)}`

    if (media.entity !== undefined) {
        params = params.concat(`&entity=${encodeURIComponent(media.entity)}`)
    }

    if (media.attribute !== undefined) {
        params = params.concat(`&attribute=${encodeURIComponent(media.attribute)}`)
    }

    if (limit !== undefined) {
        params = params.concat(`&limit=${limit}`)
    }

    if (lang !== undefined) {
        params = params.concat(`&lang=${lang}`)
    }

    if (explicit !== undefined) {
        const EXPLICIT_FMT = explicit ? 'Yes' : 'No'

        params = params.concat(`&explicit=${EXPLICIT_FMT}`)
    }

    params = params.concat(`&version=${version}`)

    return BASE_URL.concat(params)
}

async function getData(search: ItunesSearch): Promise<ItunesResult[]> {
    let res = await fetch(buildURL(search))

    let json = await res.json()

    return json.results as ItunesResult[]
}

export async function search(
    term: string,
    media: ItunesMedia,
    options?: ItunesSearch
): Promise<ItunesResult[]> {
    return getData({ ...options, term: term, media: media })
}

export async function searchMovies(term: string, options?: ItunesSearch): Promise<ItunesResult[]> {
    return search(term, new Movie(), options)
}

export async function searchPodcasts(
    term: string,
    options?: ItunesSearch
): Promise<ItunesResult[]> {
    return search(term, new Podcast(), options)
}

export async function searchMusic(term: string, options?: ItunesSearch): Promise<ItunesResult[]> {
    return search(term, new Music(), options)
}

export async function searchMusicVideo(
    term: string,
    options?: ItunesSearch
): Promise<ItunesResult[]> {
    return search(term, new MusicVideo(), options)
}

export async function searchAudioBook(
    term: string,
    options?: ItunesSearch
): Promise<ItunesResult[]> {
    return search(term, new AudioBook(), options)
}

export async function searchShortFilm(
    term: string,
    options?: ItunesSearch
): Promise<ItunesResult[]> {
    return search(term, new ShortFilm(), options)
}

export async function searchTvShow(term: string, options?: ItunesSearch): Promise<ItunesResult[]> {
    return search(term, new TvShow(), options)
}

export async function searchSoftware(
    term: string,
    options?: ItunesSearch
): Promise<ItunesResult[]> {
    return search(term, new Software(), options)
}

export async function searchEBook(term: string, options?: ItunesSearch): Promise<ItunesResult[]> {
    return search(term, new EBook(), options)
}

export async function searchAll(term: string, options?: ItunesSearch): Promise<ItunesResult[]> {
    return search(term, new All(), options)
}
