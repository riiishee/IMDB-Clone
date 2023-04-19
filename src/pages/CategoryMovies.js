import React, { useEffect, useState,} from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography,Divider, Container } from '@mui/material';
import Header from '../components/common/Header';
import Carousel from 'react-multi-carousel';
import { categoryMovies } from '../services/api';
import styled from '@emotion/styled';
import { POPULAR_API_URL, UPCOMING_API_URL, TOPRATED_API_URL, moviesType} from '../constants/constants';
import MovieList from '../components/MovieList';

const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
};


const StyledBanner = styled('img')`
height: 450px;
width: 100%;
`

const Component = styled(Box)`
width: 80%;
margin: auto;

`


const Mbox = styled(Box)`
background: #F5F5F5;
padding : 10px

`

function CategoryMovies() {

  const [movies, setMovies] = useState([]);

  const {search} = useLocation();

   useEffect(()=>{
    const getData = async (API_URL) =>{

let response = await categoryMovies(API_URL);
setMovies(response.results)
    }


    let API_URL;

    if(search.includes('popular')){
          API_URL = POPULAR_API_URL
    }else if (search.includes('upcoming')){
API_URL = UPCOMING_API_URL
    }else if (search.includes('toprated')) {
API_URL = TOPRATED_API_URL
    }

getData(API_URL);
  }, [search])

  return (
    <>

    <Header />
    <Component>

    <h1 style={{color: 'white'}}>categories</h1>

     <Carousel
                    swipeable={false}
                    draggable={false}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    slidesToSlide={1}
                    responsive={responsive} >

                    {  movies.map(movie => (
                           <>
                            <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                       
                             </> 
                             ))}

                </Carousel> 

                <Mbox>
                  <Typography variant='h6'>IMDB Charts </Typography>
                  <Typography variant='h4'>IMDB {moviesType[search.split('=')[1]]} Movies</Typography>
                <Typography style={{fontSize: 12, margin: 5}}>IMDB Top {movies.length} as rated by regular IMDB voters </Typography>
                <Divider />
                <MovieList movies={movies} />
                </Mbox>
      
    </Component>
      
    </>
  )
}

export default CategoryMovies;
