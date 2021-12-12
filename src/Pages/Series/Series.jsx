import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres';
import useGenres from '../../Hooks/useGenres.jsx';
import './series.css';

const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPage, setNumOfPage] = useState()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const genreforURL = useGenres(selectedGenres)


    const fetchMovies = async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=8c1d0dd64996aeeb3b3d4cf89e302e71&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);

        setContent(data.results);
        setNumOfPage(data.total_pages)
    }

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
  }, [page, genreforURL]);
    return (
        <>
            <span className="pageTitle">TV Series</span>

            <Genres
                type="tv"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />

            <div className="trending">
                {
                    content && content.map((c)=>(
                        <SingleContent 
                        key={c.id} 
                        id={c.id} 
                        poster={c.poster_path} 
                        title={c.title || c.name} 
                        date={c.release_date || c.first_air_date} 
                        media_type="tv"
                        vote_average={c.vote_average} 

                        />
                    ))
                }
            </div>
            {numOfPage > 1 && (
                <CustomPagination setPage={setPage} numOfPage={numOfPage} />
            )}
        </>
    )
}

export default Series
