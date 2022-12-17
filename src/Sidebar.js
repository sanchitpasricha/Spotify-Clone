import React, { useState } from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img className='sidebar__logo'
      src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt=""></img>

      <SidebarOptions Icon={HomeOutlinedIcon} title="Home"/>
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
      
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map(playlist => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar
