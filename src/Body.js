import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body(spotify) {

  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify}/>
 
      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} alt=''/>
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h4>{discover_weekly?.name}</h4>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleIcon className='body__shuffle'/>
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon />
        </div>
        
        {/* list of songs */}
        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
