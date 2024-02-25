import type { BaseIO, BaseDataConfigIO } from "./index"


export interface SimilarityIO extends BaseIO { }

export interface SimilarityResultIO {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface SimilarityConfigIO extends BaseDataConfigIO<SimilarityResultIO> { }