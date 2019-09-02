import {
    searchPodcasts,
    searchMovies,
    searchMusic,
    searchMusicVideo,
    searchAudioBook,
    searchShortFilm,
    searchTvShow,
    searchSoftware,
    searchEBook,
    searchAll
} from '../src/search'

describe('Search Media Types', () => {
    it('Can Find A Movie', async () => {
        const results = await searchMovies('Toy Story')

        const result = results.find(
            ({ collectionName, primaryGenreName }) =>
                collectionName === 'Toy Story 4-Movie Collection' &&
                primaryGenreName === 'Kids & Family'
        )

        expect(result).not.toBeUndefined()
    })

    it('Can Find A Podcast', async () => {
        const results = await searchPodcasts('538')

        const result = results.find(
            ({ collectionName, primaryGenreName }) =>
                collectionName === 'FiveThirtyEight Politics' && primaryGenreName === 'Politics'
        )

        expect(result).not.toBeUndefined()
    })

    it('Can Find Music', async () => {
        const results = await searchMusic('Robot Stop')

        const result = results.find(
            ({ collectionName, primaryGenreName }) =>
                collectionName === 'Nonagon Infinity' && primaryGenreName === 'Alternative'
        )

        expect(result).not.toBeUndefined()
    })

    it('Can Find A Music Video', async () => {
        const results = await searchMusicVideo('Thriller')

        const result = results.find(
            ({ trackName, artistName }) =>
                trackName === 'Thriller' && artistName === 'Michael Jackson'
        )

        expect(result).not.toBeUndefined()
    })

    it('Can Find An AudioBook', async () => {
        const results = await searchAudioBook('Pride and Prejudice')

        const result = results.find(
            ({ collectionName, artistName }) =>
                collectionName === 'Pride and Prejudice (Unabridged)' &&
                artistName === 'Jane Austen'
        )

        expect(result).not.toBeUndefined()
    })

    it('Can Find A Short Film', async () => {
        const results = await searchShortFilm('For The Birds')

        const result = results.find(
            ({ trackName, artistName }) => trackName === 'For the Birds' && artistName === 'Pixar'
        )

        expect(result).not.toBeUndefined()
    })

    it('Can Find A TV Show', async () => {
        const results = await searchTvShow('The Office')

        const result = results.find(
            ({ collectionName, artistName }) =>
                collectionName === 'The Office, Season 5' && artistName === 'The Office'
        )

        expect(result).not.toBeUndefined()
    })

    it('Can Find Software', async () => {
        const results = await searchSoftware('Angry Birds')

        const result = results.find(
            ({ primaryGenreName, artistName }) =>
                primaryGenreName === 'Games' && artistName === 'Rovio Entertainment Oyj'
        )

        expect(result).not.toBeUndefined()
    })

    it('Can Find An EBook', async () => {
        const results = await searchEBook('100 Years Of Solitude')

        const result = results.find(
            ({ trackName, artistName }) =>
                trackName === '100 Years of Solitude' && artistName === 'Instant-Summary'
        )

        expect(result).not.toBeUndefined()
    })

    it('Can Find Anything (All)', async () => {
        const results = await searchAll('Grateful Dead')

        expect(results.length).toBeGreaterThan(0)
    })
})
