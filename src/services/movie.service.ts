import { IDetailMovieResponse, IDetaiMovieParams, IMovieListResponse } from '../models/movie';
import { API_KEY } from './../configs/http-config/index';
import axiosClient from './../http/http-provider';
export const getNowPlayingMovies = async (): Promise<IMovieListResponse> => axiosClient.get(`/movie/now_playing?api_key=${API_KEY}`);
export const getDetaillMovie = async (params: IDetaiMovieParams): Promise<IDetailMovieResponse> =>
    axiosClient.get(`/movie/${params.id}?api_key=${API_KEY}`);
export const getTopRateMovies = async (): Promise<IMovieListResponse> => axiosClient.get(`/movie/top_rated?api_key=${API_KEY}`);
