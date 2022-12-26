import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Card from '../../components/card';
import { detailMovieAsync, nowPlayingMoviesAsync, openModal, closeModal, topRatedMoviesAsync, changeTab } from '../../features/movie/movieSlice';
import Grid from '../../layouts/grid';
import Header from '../../layouts/header';
import { selectMovie } from './../../features/movie/movieSlice';
import { IMovie } from './../../models/movie/index';
import { ICard } from './../../components/card/index';
import Main from '../../layouts/main';
import Modal from '../../components/modal';
import Tab from '../../components/tab';
import Tabs from '../../components/tab/Tabs';
import { TabMovie } from './../../constants/tab/index';
import Loading from '../../components/loading';
import { BASE_IMAGE_URL } from '../../configs/http-config';
import LazyImage from '../../components/image';
import PullIcon from '../../components/pull';

const HomePage = () => {
    const dispatch = useAppDispatch();
    const movie = useAppSelector(selectMovie);
    const { list, isLoading, isOpenModal, tab, detail } = movie;

    const loadMovieList = () => {
        switch (tab) {
            case TabMovie.nowPlaying:
                dispatch(nowPlayingMoviesAsync());
                break;
            case TabMovie.topRated:
                dispatch(topRatedMoviesAsync());
                break;
            default:
                return;
        }
    };
    useEffect(() => {
        loadMovieList();
    }, [tab]);

    const handleClickMovieItem = (id: number) => {
        dispatch(openModal());
        const params = {
            id
        };
        dispatch(detailMovieAsync(params));
    };

    return (
        <>
            <Header />
            <Main>
                <Tabs>
                    <Tab active={tab === TabMovie.nowPlaying} onClick={() => dispatch(changeTab(TabMovie.nowPlaying))}>
                        Now Playing
                    </Tab>
                    <Tab
                        active={tab === TabMovie.topRated}
                        onClick={() => {
                            dispatch(changeTab(TabMovie.topRated));
                        }}
                    >
                        Top Rated
                    </Tab>
                </Tabs>
                {isLoading && <Loading />}
                {list && (
                    <Grid>
                        {list.map((element: IMovie) => {
                            const card: ICard = {
                                id: element.id,
                                title: element.title,
                                content: '',
                                img: element.poster_path
                            };
                            return <Card card={card} key={element.id} handelClick={() => handleClickMovieItem(card.id)} />;
                        })}
                    </Grid>
                )}
                {isOpenModal && !isLoading && (
                    <Modal handleCloseModal={() => dispatch(closeModal())}>
                        {detail && (
                            <div className={` `}>
                                <LazyImage unloadedSrc="" src={`${BASE_IMAGE_URL}${detail.backdrop_path}`} />
                                <div className="p-5">{detail.title}</div>
                                <div>Overview: {detail.overview}</div>
                                <div>Bugget: {detail.budget}</div>
                                <div>Release Date: {detail.release_date}</div>
                                <div>Revernue: {detail.revenue}$</div>
                                <div>Vote average: {detail.vote_average}</div>
                            </div>
                        )}
                    </Modal>
                )}
            </Main>
        </>
    );
};

export default HomePage;
