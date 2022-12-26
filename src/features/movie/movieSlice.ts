import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IDetailMovieResponse, IDetaiMovieParams, IMovie } from '../../models/movie';
import { getDetaillMovie, getNowPlayingMovies, getTopRateMovies } from './../../services/movie.service';
import { TabMovie } from './../../constants/tab/index';

export interface MovieState {
    list: IMovie[];
    detail: IDetailMovieResponse | null;
    isLoading: boolean;
    isOpenModal: boolean;
    tab: string;
    query: string;
}

const initialState: MovieState = {
    list: [],
    detail: null,
    isLoading: false,
    isOpenModal: false,
    tab: TabMovie.nowPlaying,
    query: ''
};

export const nowPlayingMoviesAsync = createAsyncThunk('movie/now-playing', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(loading());
        const response = await getNowPlayingMovies();
        return response;
    } catch (error) {
    } finally {
        thunkAPI.dispatch(loading());
    }
});

export const detailMovieAsync = createAsyncThunk('movie/detail', async (params: IDetaiMovieParams, thunkAPI) => {
    try {
        thunkAPI.dispatch(loading());
        const response = await getDetaillMovie(params);
        return response;
    } catch (error) {
    } finally {
        thunkAPI.dispatch(loading());
    }
});

export const topRatedMoviesAsync = createAsyncThunk('movie/top-rated', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(loading());
        const response = await getTopRateMovies();
        return response;
    } catch (error) {
    } finally {
        thunkAPI.dispatch(loading());
    }
});

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = !state.isLoading;
        },
        openModal: (state) => {
            state.isOpenModal = true;
        },
        changeTab: (state, action) => {
            state.tab = action.payload;
        },
        closeModal: (state) => {
            state.isOpenModal = false;
            state.detail = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(nowPlayingMoviesAsync.fulfilled, (state, action) => {
                state.list = action.payload?.results || [];
            })
            .addCase(detailMovieAsync.fulfilled, (state, action) => {
                state.detail = action.payload || null;
            })
            .addCase(topRatedMoviesAsync.fulfilled, (state, action) => {
                state.list = action.payload?.results || [];
            });
    }
});

export const { loading, openModal, closeModal, changeTab } = movieSlice.actions;

export const selectMovie = (state: RootState) => state.movie;

export default movieSlice.reducer;
