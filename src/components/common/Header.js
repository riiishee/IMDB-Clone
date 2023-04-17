import React, { useState } from 'react';
import { AppBar, Box, Toolbar, styled, Typography, InputBase, } from '@mui/material';
import { logoURL } from '../../constants/constants';
import MenuIcon from '@mui/icons-material/Menu';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { ExpandMore } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { routhpath } from '../../constants/route';





const StyledToolBar = styled(Toolbar)`
background: black ;
min-height: 56px !important;
padding: 0 115px !important;
justify-content: space-between;

& > *{
    padding: 0 16px
}
& > div {
    display: flex; 
    align-item: center;
    cursor: pointer;
    & > p {
        font-size: 14px;
        font-weight: 600;
    }
}

& > p {
    font-size: 14px;
        font-weight: 600;

}

`;


const InputSearchFiled = styled(InputBase)`
background: #FFFFFF;
height: 30px;
width: 55%;
border-radius: 5px;


`


const Logo = styled('img')`
height: 50px;
`





function Header() {

    const [open, setOpen] = useState(null);
    const  navigate =  useNavigate()

    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    
    const handleClose = () =>{
        setOpen(null)
    }

    return (
        <>
            <AppBar position='static'>
                <StyledToolBar>
                    <Logo src={logoURL}  alt='logo' onClick={()=> navigate(routhpath.home)}/>
                    <Box onClick={handleClick}>
                        <MenuIcon />
                        <Typography>Menu</Typography>
                    </Box>
                    <HeaderMenu open={open} handleClose={handleClose}/>
                    <InputSearchFiled />
                    <Typography>IMDB<Box component='span'>Pro</Box> </Typography>
                    <Box>
                        <BookmarkAddIcon />
                        <Typography>watchlist</Typography>

                    </Box>
                    <Typography>Sign In</Typography>
                    <Box>

                        <Typography>EN</Typography>
                        <ExpandMore></ExpandMore>
                    </Box>



                </StyledToolBar>
            </AppBar>
        </>
    )
}

export default Header;
