import React from 'react'
import "./Footer.css"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img className='footer__albumLogo' 
          src="https://upload.wikimedia.org/wikipedia/en/5/57/PostyCongratsremix.jpeg" alt='' />
        <div className='footer__songInfo'>
          <h4>Congratulations!</h4>
          <p>Post </p>
        </div>
      </div>

      <div className='footer__center'>
        <ShuffleIcon className='footer__green'/>
        <SkipPreviousIcon className='footer__icon'/>
        <PlayCircleFilledWhiteOutlinedIcon fontSize='large' className='footer__icon'/>
        <SkipNextIcon className='footer__icon'/>
        <RepeatOutlinedIcon className='footer__green'/>
      </div>

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer;
