export enum EBookEntity {
    EBook = 'ebook',
}

// This isn't used but is necessary for search.ts to compile
enum EBookAttribute {}

export class EBook {
    readonly type = 'ebook';

    constructor(readonly entity?: EBookEntity, readonly attribute?: EBookAttribute) {} 
}