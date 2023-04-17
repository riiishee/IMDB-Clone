import { Typography, Box, styled } from '@mui/material'
import React from 'react'


const Component = styled(Box)`
width: 40%;
display: flex;
flex-direction: column;
align-item: baseline;
padding-left: 20px;
& >p {
    color: yellow;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px
}
`

const Poster = styled('img')`

width: 88px
`

const Wrapper = styled(Box)`
color: #FFFFFF;
display: flex;
&  >p {
    margin-left: 20px
}

`


function UpNext({movies}) {
  return (
    <>
    <Component>
        <Typography>Up Next</Typography>

        {
movies.splice(0, 3).map( movie => (
    <Wrapper>
    <Poster src = {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
    <Typography>{movie.original_title}</Typography>
    
    </Wrapper>
))
        }
    </Component>
      
    </>
  )
}

export default UpNext;
