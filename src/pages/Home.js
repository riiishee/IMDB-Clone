import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import { categoryMovies } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constants';
import { Box, styled} from '@mui/material';
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slide from '../components/Slide';


const Wrapper = styled(Box)`
display: flex;
padding: 20px 0px;

`

const Component = styled(Box)`
padding: 0 115px ;

`


function Home() {


  const [movies, SetMovies] = useState([])

  useEffect (() => {
 const getData = async () => {
   let response = await categoryMovies(NOWPLAYING_API_URL);
 SetMovies(response.results);
  }
getData();

  },  [])


  return (
    <>
      <Header />
      <Component>
      <Wrapper>
        <Banner movies={movies}/>
        <UpNext movies={movies} />
      </Wrapper>
      <Slide movies={movies}/>
      <Slide movies={movies}/>
      <Slide movies={movies}/>
      <Slide movies={movies}/>
      <Slide movies={movies}/>
      <Slide movies={movies}/>
      <Slide movies={movies}/>
      </Component>
    </>
  )
}

export default Home
