import React, { useEffect, useState } from 'react';
import './trending.css';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination'

const Trending = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPage, setNumOfPage] = useState();


    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=8c1d0dd64996aeeb3b3d4cf89e302e71&page=${page}`);
        setContent(data.results);
        setNumOfPage(data.total_pages);
    }

    useEffect(() => {
       fetchTrending()
        // eslint-disable-next-line
    }, [page])

    return (
        <>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {
                    content && content.map((c)=>(
                        <SingleContent 
                        key={c.id} 
                        id={c.id} 
                        poster={c.poster_path} 
                        title={c.title || c.name} 
                        date={c.release_date || c.first_air_date} 
                        media_type={c.media_type} 
                        vote_average={c.vote_average} 

                        />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} numOfPage={numOfPage} />
        </>
    )
}

export default Trending
