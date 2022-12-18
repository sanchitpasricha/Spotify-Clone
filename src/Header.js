import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from './DataLayer';


function Header() {
    const [{user}, dispatch] = useDataLayerValue();
  return (
    <div className='header'>
      <div className='header__left'>
        <SearchOutlinedIcon />
        <input 
            placeholder='Search for artists, podcasts and songs'
            type="text"
        />
      </div>

      <div className='header__right'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
